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
  patchForm: FormGroup;
  patchId: string | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService,
    private fb: FormBuilder
  ) {
    this.patchForm = this.fb.group({
      patchName: ['', [Validators.required, Validators.minLength(3)]],
      source: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.patchId = this.route.snapshot.paramMap.get('id');

    if (this.patchId) {
      this.loadPatchData(this.patchId);
    } else {
      this.isLoading = false;
      this.errorMessage = 'Invalid patch ID.';
    }
  }

  private loadPatchData(patchId: string): void {
    this.editService.getPatchById(patchId).subscribe(
      (data) => {
        this.isLoading = false;
        console.log('Patch data fetched:', data);

        this.patchForm.patchValue({
          patchName: data.patchName,
          source: data.source,
        });
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching patch data:', error);
        this.errorMessage =
          'Error fetching patch data.';
      }
    );
  }

  updatePatch(): void {
    if (this.patchForm.invalid) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    if (this.patchId) {
      const patchData = {
        id: this.patchId,
        ...this.patchForm.value,
      };

      this.editService.updatePatch(patchData).subscribe(
        (response) => {
          console.log('Patch updated successfully:', response);

          this.router.navigate(['/display']);
        },
        (error) => {
          console.error('Error updating patch:', error);
          this.errorMessage =
            'Error updating patch.';
        }
      );
    }
  }

  cancelUpdate(): void {
    this.router.navigate(['/patches']);
  }
}
