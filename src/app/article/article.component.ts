import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  date = new Date();
  articles:Article={
    id:1,
    addtime:this.date,
    header:"Kamu Kurumu İşçilerinin Zam Detayları Belli Oldu",
    contents:"Kamu kurumlarında çalışan ve sayıları yaklaşık 700 bin olan 4/D sürekli işçiyi kapsayan 2021 Yılı Kamu Toplu İş Sözleşmeleri Çerçeve Anlaşa Protokolü imzalandı. 2021-2022 yılları için geçerli olacak Kamu Çerçeve Protokolüne göre kamu işçilerinin maaş zammı ile sosyal hak ve yardımlarındaki artışlar şu şekilde gerçekleşti: Aylık çıplak brüt ücreti 4.100. TL’nin (günlük 136,67) altında olan işçilerin ücretleri brüt 4.100.- TL’ye (günlük 136,67)  yükseltilecek",
    photo:"url"
  };
  constructor() { }

  ngOnInit() {
  }

}
