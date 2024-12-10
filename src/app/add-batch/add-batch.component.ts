import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BatchService } from '../batch.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css'],
  providers: [MessageService],
})
export class AddBatchComponent {
  batch: { name: string; source: number | null } = {
    name: '',
    source: null,
  };

  availableSources: string[] = ['LinkedIn', 'Wuzzuf', 'Indeed', 'Glassdoor'];
  selectedFile: File | null = null;
  token = 'your-token-here';

  constructor(private batchService: BatchService,private messageService: MessageService) {}

  onFileSelect(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      this.selectedFile = fileInput.files[0];
    }
  }

  submitBatch(batchForm: NgForm): void {
    if (batchForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('zipFile', this.selectedFile);
      formData.append('batchName', this.batch.name);
      formData.append(
        'batchSource',
        this.batch.source !== null ? this.batch.source.toString() : ''
      );

      this.batchService.uploadBatch(formData, this.token).subscribe(
        (response) => {
          console.log('Batch uploaded successfully:', response);
          // alert('Batch uploaded successfully!');
          batchForm.reset();
        },
        (error) => {
          console.error('Error uploading batch:', error);
          alert('Failed to upload batch. Please try again.');
        }
      );
    } else {
      alert('Please fill out all required fields and select a file.');
    }
     if (batchForm.valid && this.selectedFile) {

      setTimeout(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Added Successfully!',
        });
        batchForm.reset();
      }, 1000);
    } else {
      alert('Please fill out all required fields and select a file.');
    }
  }
 
  cancel(): void {
    alert('Batch upload canceled.');
  }
}
