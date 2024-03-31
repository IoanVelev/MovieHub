import { Component } from '@angular/core';
import { faFacebook, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
facebook = faFacebook;
instagram = faInstagram;
xTwitter = faXTwitter;
tiktok = faTiktok;
}
