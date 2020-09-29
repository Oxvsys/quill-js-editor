import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import 'quill-emoji/dist/quill-emoji.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quill-editor';
  editorContent : string;
  editorForm : FormGroup;
  editorStyle = {
    height :'300px',
  }

  ngOnInit() {
    this.editorForm = new FormGroup ({
      'editor' : new FormControl(null)
    })
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

  // changedEditor(event : EditorChangeContent | EditorChangeSelection) {
  //   console.log(' editor got changed', event);
  //   this.editorContent = event['editor']['root'] ['innerHTML'];
  // }

  config = {
    'emoji-shortname': true,
    'emoji-textarea': true,
    'emoji-toolbar': true,
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video'],                         // link and image, video
      ['emoji']

    ]
  }
}
