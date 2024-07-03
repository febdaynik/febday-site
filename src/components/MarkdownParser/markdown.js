import { useState, useEffect } from 'react';
import Markdown from 'react-markdown'

export default function MarkdownComponent({path_file}) {
    const [content, setContent] = useState("");

    useEffect(() => {
      fetch(path_file)
        .then(res => res.text())
        .then(md => { setContent(md) })
    })

    return (
        <div className="txt-folder">
            <Markdown>{content}</Markdown>
        </div>
    )
}