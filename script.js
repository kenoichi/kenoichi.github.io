const cases={
    ykk:{
      kicker:'PROJECT 01 / YKK ZIPPER CIMANGGIS',
      title:'CTU warehouse automation',
      desc:'HIKROBOT CTU implementation focused on site layout, automation flow, operational tuning and controlled robot movement around operator-access areas.',
      imgs:['assets/image3.webp', 'assets/image5.webp', 'assets/image22.webp','assets/image4.png'], // Add your project pictures here
      points:[['SYSTEM','HIKROBOT CTU · RCS'],['INTEGRATION','Node-RED + PLC ↔ RCS'],['SAFETY','Custom safety gate + interlocking'],['FOCUS','Material flow · jamming · layout optimization']]
    },
    wilmar:{
      kicker:'PROJECT 02 / WILMAR MEDAN',
      title:'AMR navigation & layout',
      desc:'AMR warehouse automation with fleet-based planning, RCS integration support and a specialized QR layout for reliable navigation into container cargo boxes.',
      imgs:['assets/image6.webp', 'assets/image7.png','assets/image9.png','assets/image15.webp'],
      points:[['SYSTEM','HIKROBOT AMR · RCS'],['NAVIGATION','QR navigation / QR matrix'],['DESIGN','Container-box QR installation method'],['FOCUS','Durability · throughput · site validation']]
    },
    astra:{
      kicker:'PROJECT 03 / ASTRA HONDA MOTOR CIKARANG',
      title:'Multi-robot integration',
      desc:'AMR and FMR operations implemented in shared and intersecting zones, combining 2D SLAM, 3D SLAM and PLC/Node-RED interlocking.',
      imgs:['assets/image10.png', 'assets/image12.png','assets/image11.webp'],
      points:[['SYSTEM','HIKROBOT AMR + FMR'],['MAPPING','2D SLAM + 3D SLAM'],['INTEGRATION','PLC + Node-RED ↔ RCS'],['SAFETY','FMR · robotic arm · supporting systems']]
    },
    shell:{
      kicker:'PROJECT 04 / SHELL MANUFACTURING INDONESIA',
      title:'AMR / FMR automation',
      desc:'Wide-area QR navigation and multi-robot implementation combined with inspection software and PLC-controlled bridging conveyors.',
      imgs:['assets/image13.webp', 'assets/image14.webp', 'assets/image16.png','assets/image111.webp'],
      points:[['SYSTEM','HIKROBOT AMR + FMR'],['SOFTWARE','Visual Studio · Neurala · Basler'],['NAVIGATION','Wide-area QR matrix'],['INTEGRATION','PLC-controlled bridging conveyor']]
    },
    epson:{
      kicker:'PROJECT 05 / EPSON INDONESIA',
      title:'FMR warehouse delivery',
      desc:'SEER FMR implementation for automated warehouse delivery, including network infrastructure, SLAM navigation, process-flow configuration and on-site tuning.',
      imgs:['assets/image18.png', 'assets/image17.png', 'assets/image19.png'],
      points:[['SYSTEM','SEER FMR'],['NETWORK','Installation + configuration'],['NAVIGATION','SLAM-based navigation'],['FOCUS','Testing · troubleshooting · tuning']]}
   };
   
   const modal=document.querySelector('#modal');
   
   const openModal=(key)=>{
     const c=cases[key];
     document.querySelector('#modal-kicker').textContent=c.kicker;
     document.querySelector('#modal-title').textContent=c.title;
     document.querySelector('#modal-desc').textContent=c.desc;
     
     // Renders the images dynamically inside the modal
     const imgGallery = document.querySelector('#modal-images');
     if(imgGallery) {
       imgGallery.innerHTML = c.imgs.map(img => `<img src="${img}" alt="Project showcase" style="width: 100%; height: 180px; object-fit: cover; border: 1px solid #38403f;">`).join('');
     }
   
     document.querySelector('#modal-points').innerHTML=c.points.map(p=>`<div><span>${p[0]}</span><p>${p[1]}</p></div>`).join('');
     modal.classList.add('open');
     modal.setAttribute('aria-hidden','false')
   };
   
   document.querySelectorAll('.details').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.project)));
   document.querySelector('.modal-close').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
   modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}});
   document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});