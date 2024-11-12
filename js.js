class AppSidebarButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});


        const template=document.getElementById('sidebar-button').content.cloneNode(true);
        this.shadowRoot.append(template);



        const text=this.getAttribute('text');
        this.shadowRoot.querySelector('.text').textContent=text;

        if (text=='Draft') {
            this.shadowRoot.querySelector('.text').style.fontWeight = 'bold';
        }


        if (this.hasAttribute('selected')) {
            this.shadowRoot.querySelector('.sidebar-button').classList.add('selected');
            this.shadowRoot.querySelector('.text').style.fontWeight = 'bold';
            
        }


    


        const unreadCount=this.getAttribute('unreadCount');
        if (unreadCount) {
            const badge=this.shadowRoot.querySelector('.badge');
            badge.textContent=unreadCount;
            badge.style.display='inline-block';
            
        }else{
            this.shadowRoot.querySelector('.badge').style.display='none';
        }


     
    }
}

customElements.define('app-sidebar-button',AppSidebarButton);