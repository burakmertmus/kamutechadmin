import { Component, OnInit } from '@angular/core';
import { Comments } from '../models/comments';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  
  // ={
  //   id:1,
  //   photo:"url",
  //   comentContent:"2015 yılından bu yana Genel Müdürlüğümüz bünyesinde çalıştırılan alt işverenlere ait hakediş evraklarının düzenlenmesi işlemlerini Kamutech firmasından temin edilen web tabanlı “Kamu Alt İşveren Bilgi Sistemleri” programını kullanarak yürütmekteyiz. Arayüzleri kullanıcı dostu olan program her düzeyden kullanıcının rahatlıkla kullanılabileceği şekilde dizayn edilmiş olması hızlı ve hatasız olarak işlerimizi yürütmemizi sağlamıştır. Ayrıca firmanın sunduğu hizmet konusunda hızlı ve etkili teknik sağlaması karşılaşılan sorunların hemen çözülmesini temin etmiştir. Bugüne kadar aldığımız hizmetten duyduğumuz memnuniyet dolayısıyla “Kamu Alt İşveren Bilgi Sistemleri” programını tüm alt işveren çalıştıran kurum ve kuruluşları önerebiliriz. Kamutech firmasına Genel Müdürlüğümüze sunduğu özverili ve sorunsuz hizmetlerden dolayı Kurumum ve şahsım adına teşekkür ederim",
  //   nameSurname:"ALİ BİLGİLİSOY",
  //   posission:"DESTEK HİZMETLERİ DAİRESİ BŞK.LIĞI",
  //   organisation:"T.C. Başbakanlık Basın Yayın Ve Enformasyon Genel Müdürlüğü"
  // };

  constructor(private commentService:CommentService) { }
  comments:Comments[];
     ngOnInit()
        {
            this.commentService.getComments().subscribe(data => {
              this.comments = data;
            })
        }

        createComments(comment:Comment)
        {
            this.commentService.createComments(comment);
            window.location.reload();
        }

        updateCommentsForm(comment:Comment, id:number)
        {
            this.commentService.updateComments(comment, id);
            window.location.reload();
        }

        deleteComment(id:number)
        {
            this.commentService.deleteComment(id);
            window.location.reload();
        }

}
