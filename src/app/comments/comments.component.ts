import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { Comments } from '../models/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  coments:Comments={
    id:1,
    photo:"url",
    comentContent:"2015 yılından bu yana Genel Müdürlüğümüz bünyesinde çalıştırılan alt işverenlere ait hakediş evraklarının düzenlenmesi işlemlerini Kamutech firmasından temin edilen web tabanlı “Kamu Alt İşveren Bilgi Sistemleri” programını kullanarak yürütmekteyiz. Arayüzleri kullanıcı dostu olan program her düzeyden kullanıcının rahatlıkla kullanılabileceği şekilde dizayn edilmiş olması hızlı ve hatasız olarak işlerimizi yürütmemizi sağlamıştır. Ayrıca firmanın sunduğu hizmet konusunda hızlı ve etkili teknik sağlaması karşılaşılan sorunların hemen çözülmesini temin etmiştir. Bugüne kadar aldığımız hizmetten duyduğumuz memnuniyet dolayısıyla “Kamu Alt İşveren Bilgi Sistemleri” programını tüm alt işveren çalıştıran kurum ve kuruluşları önerebiliriz. Kamutech firmasına Genel Müdürlüğümüze sunduğu özverili ve sorunsuz hizmetlerden dolayı Kurumum ve şahsım adına teşekkür ederim",
    nameSurname:"ALİ BİLGİLİSOY",
    posission:"DESTEK HİZMETLERİ DAİRESİ BŞK.LIĞI",
    organisation:"T.C. Başbakanlık Basın Yayın Ve Enformasyon Genel Müdürlüğü"
  };

  constructor() { }

  ngOnInit() {
  }

}
