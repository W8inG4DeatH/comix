import { Injectable } from '@angular/core';
import { IItem } from './list.interfaces';

@Injectable({
	providedIn: 'root'
})

export class ListDataService {

	constructor()
	{

	}

	GetComixListData(): Array<IItem>
	{
		let comixListData: Array<IItem> = [
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 1',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 2',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Złoty puchar - część 3',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 1',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 2',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szranki i konkury - część 3',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 1',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 2',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Woje Mirmila - część 3',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Szkoła latania',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Wielki turniej',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Na wczasach',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Zamach na Milusia',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Skarby Mirmiła',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Cudowny lek',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Festiwal czarownic',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Dzień śmiechały',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'W krainie borostworów',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Mirmił w opałach',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Urodziny Milusia',
				Author: 'Janusz Christa',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Obłęd Hegemona',
				Author: 'Różni wg Janusza Christy',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Łamignat straszliwy',
				Author: 'Różni wg Janusza Christy',
				NumberOfPages: 48
			},
			{
				SeriesTitle: 'Kajko i Kokosz',
				ComixTitle: 'Królewska Konna',
				Author: 'Maciej Kur, Sławomir Kiełbus, Piotr Bednarczyk',
				NumberOfPages: 48
			},
		]

		return comixListData;
	}

}
