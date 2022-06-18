import { Component, OnInit } from '@angular/core';
import { IItem } from '../list.interfaces';
import { ListDataService } from '../list-data.service';

@Component({
    selector: 'list-panel',
    templateUrl: './list-panel.component.html',
    styleUrls: ['./list-panel.component.scss']
})

export class ListPanelComponent implements OnInit {

    public itemsData: Array<IItem> = [];

    constructor(
        public ListDataService: ListDataService
    )
    { }

    ngOnInit(): void {
        this.LoadData();
    }

    LoadData()
    {
        this.itemsData = this.ListDataService.GetComixListData();
    }
}
