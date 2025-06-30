import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [];
  categories: string[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
    this.categories = [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}