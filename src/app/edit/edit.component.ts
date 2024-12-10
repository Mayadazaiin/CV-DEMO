import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  patchForm!: FormGroup; // FormGroup to handle form state
  availableSources: string[] = ['Source1', 'Source2', 'Source3']; // Example sources
  patch: any = { id: '', patchName: '', source: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const patchId = this.route.snapshot.paramMap.get('id');
    if (patchId) {
      // this.fetchPatchData(patchId);
    }

    this.patchForm = this.fb.group({
      patchName: ['', Validators.required], // Validators for form fields
      source: ['', Validators.required],
    });
  }

  // fetchPatchData(id: string): void {
  //   this.editService.getPatchById(id).subscribe(
  //     (response: any) => {
  //       this.patch = response;
  //       console.log('Fetched Patch:', this.patch);

  //       // Populate form with fetched data
  //       this.patchForm.patchValue({
  //         patchName: this.patch.patchName,
  //         source: this.patch.source,
  //       });
  //     },
  //     (error) => {
  //       console.error('Error fetching patch:', error);
  //     }
  //   );
  // }

  updatePatch(): void {
    if (this.patchForm.valid) {
      const updatedPatch = this.patchForm.value;

      this.editService.updatePatch(updatedPatch).subscribe(
        (response) => {
          console.log('Patch updated successfully:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error updating patch:', error);
        }
      );
    }
  }

  navigateBack(): void {
    this.router.navigate(['/']);
  }
}
