import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Version } from 'src/app/models/Versions.models';
import { VersionService } from 'src/app/Shared/version.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  id = 0;
version : Version;
  constructor(private route: ActivatedRoute, public service : VersionService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.service.get(this.id).subscribe(r => {
      this.version = r as any;
    } )
  }

}
