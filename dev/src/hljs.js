import hljs from 'highlight.js'

// const escape = (code) => {
//   return code
//           .replace(/&/g, '&amp;')
//           .replace(/</g, '&lt;')
//           .replace(/>/g, '&gt;')
//           .replace(/"/g, '&quot;').trim()
// }

export default () => {
  window.document.querySelectorAll('pre code').forEach(ele => {
    // ele.innerHTML = escape(ele.innerHTML)
    hljs.highlightBlock(ele)
  })
}
