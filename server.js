import express from "express";
import ViteExpress from "vite-express";
import fs from 'fs'

const app = express();
app.set('view engine', 'ejs'); 

app.get("/", (req, res) => {

  var pageBreadCrumbs = '';
  pageBreadCrumbs += '<li class="breadcrumb-item" aria-current="page"><a href="/">Index</a></li>';
  pageBreadCrumbs += '<li class="breadcrumb-item active" aria-current="page">Markdown Guide</li>';

  var pageSideNavbarLinks = '';
  pageSideNavbarLinks += '<ul class="nav flex-column bs-sidenav mt-3">';
    pageSideNavbarLinks += '<li class="nav-item">';
      pageSideNavbarLinks += '<a href="/" class="nav-link active">Markdown Guide</a>';
    pageSideNavbarLinks += '</li>';
    pageSideNavbarLinks += '<li class="nav-folder nav-item">';
    pageSideNavbarLinks += '<a href="/markdown-guide/basic-syntax/index.html" class="nav-link ">';
      pageSideNavbarLinks += '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M168-192q-29 0-50.5-21.5T96-264v-432q0-29.7 21.5-50.85Q139-768 168-768h216l96 96h312q29.7 0 50.85 21.15Q864-629.7 864-600v336q0 29-21.15 50.5T792-192H168Zm0-72h624v-336H450l-96-96H168v432Zm0 0v-432 432Z"></path></svg>';
      pageSideNavbarLinks += '&nbsp;&nbsp;Basic Syntax';
      pageSideNavbarLinks += '</a>';
      pageSideNavbarLinks += '</li>';
      pageSideNavbarLinks += '<li class="nav-folder nav-item"><a href="/markdown-guide/extended-syntax/index.html" class="nav-link ">';
      pageSideNavbarLinks += '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M168-192q-29 0-50.5-21.5T96-264v-432q0-29.7 21.5-50.85Q139-768 168-768h216l96 96h312q29.7 0 50.85 21.15Q864-629.7 864-600v336q0 29-21.15 50.5T792-192H168Zm0-72h624v-336H450l-96-96H168v432Zm0 0v-432 432Z"></path></svg>';
      pageSideNavbarLinks += '&nbsp;&nbsp;Extended Syntax';
    pageSideNavbarLinks += '</a>';
    pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '</ul>';

  var pagination = '';
  pagination += '<div class="row g-0 no-select">';
  pagination += '<div class="col-6">';
  pagination += '</div>';
  pagination += '<div class="col-6">';
  pagination += '<div class="control float-end text-end" onclick="olodocNextPage(\'/markdown-guide/basic-syntax/index.html\')">';
  pagination += '<div class="iterator-label">Next</div>';
  pagination += '<a href="javascript:void(0);">Basic Syntax »</a>';
  pagination += '</div>';
  pagination += '</div>';
  pagination += '</div>';

  res.render("index", { 
    pagination: pagination,
    pageBreadCrumbs: pageBreadCrumbs,
    pageSideNavbarLinks: pageSideNavbarLinks,
    pageContent: fs.readFileSync('./views/markdown-guide/index.html', 'utf-8') 
  });

});

app.get("/markdown-guide/basic-syntax/index.html", (req, res) => {

  var pageBreadCrumbs = '';
  pageBreadCrumbs += '<li class="breadcrumb-item" aria-current="page"><a href="/">Index</a></li>';
  pageBreadCrumbs += '<li class="breadcrumb-item" aria-current="page"><a href="/">Markdown Guide</a></li>';
  pageBreadCrumbs += '<li class="breadcrumb-item active" aria-current="page">Basic Syntax</li>';

  var pageSideNavbarLinks = '';
  pageSideNavbarLinks += '<ul class="nav flex-column bs-sidenav mt-3">';
  pageSideNavbarLinks += '<li class="nav-item">';
  pageSideNavbarLinks += '<a href="/markdown-guide/basic-syntax/index.html" class="nav-link active">Basic Syntax</a>';
  pageSideNavbarLinks += '<div id="rsb-collapse">';
  pageSideNavbarLinks += '<ul class="nav flex-column bs-sidenav">';
  pageSideNavbarLinks += '<ul class="nav-sub">';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h2">';
  pageSideNavbarLinks += '<a href="#0-Headings" class="nav-sub-link">Headings</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h2">';
  pageSideNavbarLinks += '<a href="#1-Paragraphs" class="nav-sub-link">Paragraphs</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h2">';
  pageSideNavbarLinks += '<a href="#2-Line Breaks" class="nav-sub-link">Line Breaks</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h2">';
  pageSideNavbarLinks += '<a href="#3-Emphasis" class="nav-sub-link">Emphasis</a></li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h3">';
  pageSideNavbarLinks += '<a href="#4-Bold" class="nav-sub-link">Bold</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#5-Italic" class="nav-sub-link">Italic</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#6-Bold and Italic" class="nav-sub-link">Bold and Italic</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#7-Blockquotes" class="nav-sub-link">Blockquotes</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#8-Blockquotes with Multiple Paragraphs" class="nav-sub-link">Blockquotes with Multiple Paragraphs</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#9-Nested Blockquotes" class="nav-sub-link">Nested Blockquotes</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#10-Blockquotes with Other Elements" class="nav-sub-link">Blockquotes with Other Elements</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#11-Lists" class="nav-sub-link">Lists</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#12-Ordered Lists" class="nav-sub-link">Ordered Lists</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#13-Unordered Lists" class="nav-sub-link">Unordered Lists</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#14-Starting Unordered List Items With Numbers" class="nav-sub-link">Starting Unordered List Items With Numbers</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#15-Adding Elements in Lists" class="nav-sub-link">Adding Elements in Lists</a></li><li class="nav-sub-item nav-sub-item-h4"><a href="#16-Paragraphs" class="nav-sub-link">Paragraphs</a></li><li class="nav-sub-item nav-sub-item-h4"><a href="#17-Blockquotes" class="nav-sub-link">Blockquotes</a></li><li class="nav-sub-item nav-sub-item-h4"><a href="#18-Code Blocks" class="nav-sub-link">Code Blocks</a></li><li class="nav-sub-item nav-sub-item-h4"><a href="#19-Images" class="nav-sub-link">Images</a></li><li class="nav-sub-item nav-sub-item-h4"><a href="#20-Lists" class="nav-sub-link">Lists</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#21-Horizontal Rules" class="nav-sub-link">Horizontal Rules</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#22-Links" class="nav-sub-link">Links</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#23-Adding Titles" class="nav-sub-link">Adding Titles</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#24-Relative Links" class="nav-sub-link">Relative Links</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#25-Reference Links" class="nav-sub-link">Reference Links</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#26-Images" class="nav-sub-link">Images</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#27-Linking Images" class="nav-sub-link">Linking Images</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#28-Escaping Characters" class="nav-sub-link">Escaping Characters</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#29-Characters You Can Escape" class="nav-sub-link">Characters You Can Escape</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#30-HTML" class="nav-sub-link">HTML</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#31-Links" class="nav-sub-link">Links</a></li></ul></ul></div></li></ul>';

  var pagination = '';
  res.render("index", { 
    pagination: pagination,
    pageBreadCrumbs: pageBreadCrumbs,
    pageSideNavbarLinks: pageSideNavbarLinks,
    pageContent: fs.readFileSync('./views/markdown-guide/basic-syntax/index.html', 'utf-8') 
  });

});

app.get("/markdown-guide/extended-syntax/index.html", (req, res) => {

  var pageBreadCrumbs = '';
  pageBreadCrumbs += '<li class="breadcrumb-item" aria-current="page"><a href="/">Index</a></li>';
  pageBreadCrumbs += '<li class="breadcrumb-item" aria-current="page"><a href="/">Markdown Guide</a></li>';
  pageBreadCrumbs += '<li class="breadcrumb-item active" aria-current="page">Extended Syntax</li>';

  var pageSideNavbarLinks = '';
  pageSideNavbarLinks += '<ul class="nav flex-column bs-sidenav mt-3">';
  pageSideNavbarLinks += '<li class="nav-item">';
  pageSideNavbarLinks += '<a href="/markdown-guide/extended-syntax/index.html" class="nav-link active">Extended Syntax</a>';
  pageSideNavbarLinks += '<div id="rsb-collapse">';
  pageSideNavbarLinks += '<ul class="nav flex-column bs-sidenav">';
  pageSideNavbarLinks += '<ul class="nav-sub">';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h2">';
  pageSideNavbarLinks += '<a href="#0-Tables" class="nav-sub-link">Tables</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h3">';
  pageSideNavbarLinks += '<a href="#1-Basic Table" class="nav-sub-link">Basic Table</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h3">';
  pageSideNavbarLinks += '<a href="#2-Bordered Table" class="nav-sub-link">Bordered Table</a>';
  pageSideNavbarLinks += '</li>';
  pageSideNavbarLinks += '<li class="nav-sub-item nav-sub-item-h3"><a href="#3-Highlighted Table" class="nav-sub-link">Highlighted Table</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#4-Code Higlighting" class="nav-sub-link">Code Higlighting</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#5-Escaping Backticks" class="nav-sub-link">Escaping Backticks</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#6-Language Coloring" class="nav-sub-link">Language Coloring</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#7-Line Numbers" class="nav-sub-link">Line Numbers</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#8-Marking Line Numbers" class="nav-sub-link">Marking Line Numbers</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#9-Marking Multiple Line Numbers" class="nav-sub-link">Marking Multiple Line Numbers</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#10-Command Line" class="nav-sub-link">Command Line</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#11-Alerts" class="nav-sub-link">Alerts</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#12-Note" class="nav-sub-link">Note</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#13-Tip" class="nav-sub-link">Tip</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#14-Important" class="nav-sub-link">Important</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#15-Warning" class="nav-sub-link">Warning</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#16-Caution" class="nav-sub-link">Caution</a></li><li class="nav-sub-item nav-sub-item-h2"><a href="#17-Tabs" class="nav-sub-link">Tabs</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#18-Basic Tabs" class="nav-sub-link">Basic Tabs</a></li><li class="nav-sub-item nav-sub-item-h3"><a href="#19-Tabs with Code Blocks" class="nav-sub-link">Tabs with Code Blocks</a></li></ul></ul></div></li></ul>';

  var pagination = '';
  res.render("index", { 
    pagination: pagination,
    pageBreadCrumbs: pageBreadCrumbs,
    pageSideNavbarLinks: pageSideNavbarLinks,
    pageContent: fs.readFileSync('./views/markdown-guide/extended-syntax/index.html', 'utf-8') 
  });

});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
