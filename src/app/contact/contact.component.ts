import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('myForm') myForm!:ElementRef;
  @ViewChild('nameField') nameField!:ElementRef;
  @ViewChild('mailField') mailField!:ElementRef;
  @ViewChild('messageField') messageField!:ElementRef;
  @ViewChild('dsgvoCheck') dsgvoCheck!:ElementRef;
  @ViewChild('formBtn') formBtn!:ElementRef;

  constructor () {}

  ngOnInit(): void {
    
  }

  async sendMail() {
    //action="https://niclasmichel.com/mailing/send_mail.php" 
    console.log('Sending mail', this.myForm);

    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let dsgvoCheck = this.dsgvoCheck.nativeElement;
    let formBtn = this.formBtn.nativeElement;
    let msgSuccess = <HTMLElement>document.getElementById('msgSuccess');

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    dsgvoCheck.disabled = true;
    formBtn.disabled = true;
    
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('mail', mailField.value);
    formData.append('message', messageField.value);

    await fetch('https://niclasmichel.com/mailing/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )
    
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    dsgvoCheck.disabled = false;
    formBtn.disabled = false;
    msgSuccess.classList.remove('hidden');

    setTimeout(() => {
      msgSuccess.classList.add('hidden');
    }, 3500);
    
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
    dsgvoCheck.checked = false;

  }


}
