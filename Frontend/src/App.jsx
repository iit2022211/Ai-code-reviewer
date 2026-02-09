import { useState, useEffect } from "react"
import Editor from "react-simple-code-editor"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"

import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import axios from "axios"
import "./App.css"

/* Language templates */
const templates = {
  javascript: `function sum(a, b) {
  return a + b;
}`,

  python: `def sum(a, b):
    return a + b`,

  java: `public class Main {
  public static int sum(int a, int b) {
    return a + b;
  }
}`,

  cpp: `int sum(int a, int b) {
  return a + b;
}`,

  go: `func sum(a int, b int) int {
  return a + b
}`
}

export default function App() {
  const [language, setLanguage] = useState("cpp")
  const [code, setCode] = useState(templates.cpp)
  const [review, setReview] = useState("")

  // Auto update code when language changes
  useEffect(() => {
    setCode(templates[language])
  }, [language])

  const highlight = (code) => {
    try {
      return hljs.highlight(code, { language }).value
    } catch {
      return code
    }
  }

  async function reviewCode() {
    const res = await axios.post("http://localhost:3000/ai/get-review", {
      code,
      language
    })
    setReview(res.data)
  }

  return (
    <main>
      <div className="left">
        <select
          className="lang-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="go">Go</option>
        </select>

        <div className="code-editor">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={highlight}
            padding={16}
            textareaClassName="editor-textarea"
            preClassName="editor-pre"
          />
        </div>

        <button className="review" onClick={reviewCode}>
          Review
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  )
}
