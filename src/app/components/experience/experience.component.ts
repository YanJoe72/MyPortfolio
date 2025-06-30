import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ModalComponent } from '../modal/modal.component';
import { Experience } from '../../models/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [];
  selectedExperience: Experience | null = null;
  isModalOpen = false;

  constructor(private dataService: DataService) {
    this.experiences = this.dataService.getExperiences();
  }

  openModal(experience: Experience) {
    this.selectedExperience = experience;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedExperience = null;
  }
}