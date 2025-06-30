import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ModalComponent } from '../modal/modal.component';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  isModalOpen = false;

  constructor(private dataService: DataService) {
    this.projects = this.dataService.getProjects();
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
  }
}