import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('job-portal');

  searchText = '';

  jobs = [
    {
      title: 'Senior Product Designer',
      company: 'TechNova',
      location: 'Bengaluru',
      type: 'Full-time',
      salary: '₹12–18 LPA',
      posted: '2 days ago',
      skills: ['Figma', 'Design Systems', 'Prototyping'],
      match: '94%',
      isNew: true
    },

    {
      title: 'Frontend Engineer',
      company: 'Apex Digital',
      location: 'Remote',
      type: 'Full-time',
      salary: '₹10–15 LPA',
      posted: '5 days ago',
      skills: ['Angular', 'TypeScript', 'CSS'],
      match: '89%',
      isNew: false
    },

    {
      title: 'Data Analyst',
      company: 'Nova Analytics',
      location: 'Hyderabad',
      type: 'Full-time',
      salary: '₹7–11 LPA',
      posted: '1 week ago',
      skills: ['Python', 'SQL', 'Tableau'],
      match: '86%',
      isNew: false
    }
  ];

  searchJobs() {
    console.log(this.searchText);
  }

}