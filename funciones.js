
const TELEFONO_LOCAL = "5493874848698"; // Reemplazar por el número real del local[cite: 5]
function getExtraValue(o, p, activeRadioNames) {
  if (typeof o.extra === 'object' && o.extra !== null) { //[cite: 5]
    if (o.extra[p.id] !== undefined) return o.extra[p.id]; //[cite: 5]
    for (let name of activeRadioNames) { //[cite: 5]
      if (o.extra[name] !== undefined) return o.extra[name]; //[cite: 5]
    } //[cite: 5]
    return 0; //[cite: 5]
  } //[cite: 5]
  return typeof o.extra === 'number' ? o.extra : 0; //[cite: 5]
}
const MENU = [ //[cite: 5]
    
  { //[cite: 5]
    id: 1, //[cite: 5]
    cat: 'Hamburguesas', //[cite: 5]
    name: 'Hamburguesa', //[cite: 5]
    desc: 'Elegí la cantidad de carnes y tu variedad favorita.', //[cite: 5]
    price: 6500, //[cite: 5]
    img: 'image/burguer1.png', //[cite: 5]
    groups: [ //[cite: 5]
      { //[cite: 5]
        name: 'Cantidad de Carnes', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        opts: [ //[cite: 5]
          { name: '1 Carne', extra: 0 }, //[cite: 5]
          { name: '2 Carnes', extra: 0 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Variedad', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        soloPara: ['1 Carne'], //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Clásica', extra: 0 }, //[cite: 5]
          { name: 'Bacon', extra: 500 }, //[cite: 5]
          { name: 'Mexicana', extra:500 }, //[cite: 5]
          { name: 'Americana', extra: 0 }, //[cite: 5]
          { name: 'Cheese Onion', extra: 0 }, //[cite: 5]
          { name: 'Cuarto de libra', extra: 1000 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Variedad', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        soloPara: ['2 Carnes'], //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Clásica', extra: 1000 }, //[cite: 5]
          { name: 'Bacon', extra: 1500 }, //[cite: 5]
          { name: 'Mexicana', extra: 1000 }, //[cite: 5]
          { name: 'Americana', extra: 1500 }, //[cite: 5]
          { name: 'Cuarto de Libra', extra: 3000 }, //[cite: 5]
          { name: 'Q pinta', extra: 2000 }, //[cite: 5]
          { name: 'Mega Bom', extra: 2500 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Adicionales', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: false, //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Papas fritas', extra: 2000 }, //[cite: 5]
          { name: 'sin papas', extra: 0 } //[cite: 5]
        ] //[cite: 5]
      } //[cite: 5]
    ] //[cite: 5]
  } //[cite: 5]
, //[cite: 5]

    //[cite: 5]
  { //[cite: 5]
    id: 2, //[cite: 5]
    cat: 'Sandwiches', //[cite: 5]
    name: 'Sandwiches', //[cite: 5]
    desc: 'Elija una opcion y luego su variedad ', //[cite: 5]
    price: 7000, //[cite: 5]
    img: 'image/sandwich.png', //[cite: 5]
    groups: [ //[cite: 5]
      { //[cite: 5]
        name: '', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Lomito', extra: 0 }, //[cite: 5]
          { name: 'Milanesa', extra: 0 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Variedad Milanesa', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        soloPara: ['Milanesa'], //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Mila Completo', extra: 0 }, //[cite: 5]
          { name: 'Mila Cheddar', extra: 1000 }, //[cite: 5]
          { name: 'Napolitano', extra:1000 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Variedad Lomito', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: true, //[cite: 5]
        soloPara: ['Lomito'], //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Lomo Completo', extra: 500 }, //[cite: 5]
          { name: 'Lomo cheddar', extra: 1500 } //[cite: 5]
        ] //[cite: 5]
      }, //[cite: 5]
      { //[cite: 5]
        name: 'Adicionales', //[cite: 5]
        type: 'radio', //[cite: 5]
        req: false, //[cite: 5]
        opts: [ //[cite: 5]
          { name: 'Papas fritas', extra: 2000 }, //[cite: 5]
          { name: 'sin papas', extra: 0 } //[cite: 5]
        ] //[cite: 5]
      } //[cite: 5]
    ] //[cite: 5]
  } //[cite: 5]
  , //[cite: 5]
   //[cite: 5]
  {id:3,cat:'Pizzas',name:'Pizzas',desc:'Salsa de tomate, muzzarella y aceitunas',price:9000.00,img:'image/pizza.png', //[cite: 5]
    groups:[ //[cite: 5]
      {name:'tipos',type:'radio',req:false,opts:[ //[cite: 5]
        {name:'mozzarella',extra:0.00},{name:'napolitana',extra:500.00},{name:'fugazzeta',extra:500.00}, //[cite: 5]
        {name:'Turca',extra:500.00}, {name:'especial',extra:1000.00},{name:'Calabreza',extra:500.00} //[cite: 5]
        , {name:'Cheddar con Ppas',extra:1000.00},{name:'Argenta',extra:1500.00},{name:'Q pinta',extra:3500.00} //[cite: 5]
      ]} //[cite: 5]
    ] //[cite: 5]
  }, //[cite: 5]
   //[cite: 5]
  {id:4,cat:'Empanadas',name:'Empanadas (x12)',desc:'Relleno a elección, horneadas',price:8000.00,img:'image/empanada.png', //[cite: 5]
    groups:[ //[cite: 5]
      {name:'Relleno',type:'radio',req:true,opts:[ //[cite: 5]
        {name:'Carne cortada a cuchillo',extra:0} //[cite: 5]
      ]}, //[cite: 5]
      {name:'Cocción',type:'radio',req:true,opts:[ //[cite: 5]
        {name:'Horneadas',extra:0},{name:'Fritas',extra:0} //[cite: 5]
      ]} //[cite: 5]
    ] //[cite: 5]
  }, //[cite: 5]
{ //[cite: 5]
    id: 101, //[cite: 5]
    cat: 'Promos', //[cite: 5]
    name: '2 Mila completa', //[cite: 5]
    desc: 'LECHUGA, TOMATE, JAMON, QUESO Y HUEVO', //[cite: 5]
    price: 17000, //[cite: 5]
    img: 'image/sandwich.png', //[cite: 5]
    groups: [] //[cite: 5]
  }, //[cite: 5]
  { //[cite: 5]
    id: 102, //[cite: 5]
    cat: 'Promos', //[cite: 5]
    name: '2 Lomito cheddar', //[cite: 5]
    desc: 'TOMATE, CHEDDAR, BACON, HUEVO Y CEBOLLA CARAMELIZADA', //[cite: 5]
    price: 20000, //[cite: 5]
    img: 'image/sandwich.png', //[cite: 5]
    groups: [] //[cite: 5]
  }, //[cite: 5]
  { //[cite: 5]
    id: 103, //[cite: 5]
    cat: 'Promos', //[cite: 5]
    name: '2 Mila cheddar', //[cite: 5]
    desc: 'TOMATE, CHEDDAR, BACON, HUEVO Y CEBOLLA CARAMELIZADA', //[cite: 5]
    price: 19000, //[cite: 5]
    img: 'image/sandwich.png', //[cite: 5]
    groups: [] //[cite: 5]
  }, //[cite: 5]
  { //[cite: 5]
    id: 104, //[cite: 5]
    cat: 'Promos', //[cite: 5]
    name: '2 Hamburguesas Qpinta', //[cite: 5]
    desc: 'DOBLE CARNE, JAMON, QUESO, BACON Y BAÑO DE CHEDDAR', //[cite: 5]
    price: 20000, //[cite: 5]
    img: 'image/burguer1.png', //[cite: 5]
    groups: [] //[cite: 5]
  }, //[cite: 5]
   { //[cite: 5]
    id: 105, //[cite: 5]
    cat: 'Promos', //[cite: 5]
    name: '2 Hamburguesas bacon', //[cite: 5]
    desc: 'BACON, CHEDDAR Y HUEVO', //[cite: 5]
    price: 17000, //[cite: 5]
    img: 'image/burguer1.png', //[cite: 5]
    groups: [] //[cite: 5]
  } //[cite: 5]

]; //[cite: 5]
 

let cart = []; //[cite: 5]
let currentProd = null; //[cite: 5]
let currentSelections = {}; //[cite: 5]
let currentQty = 1; //[cite: 5]
let currentCat = 'Todos'; //[cite: 5]
let searchTerm = ''; //[cite: 5]
let direccionEntrega = ''; 
let metodoPago = '';       

function renderMenu(){
  const grid = document.getElementById('menu-grid'); //[cite: 5]
  if(!grid) return; //[cite: 5]
  const filtered = MENU.filter(p=>{ //[cite: 5]
    const catOk = currentCat==='Todos'||p.cat===currentCat; //[cite: 5]
    const srchOk = !searchTerm||p.name.toLowerCase().includes(searchTerm)||p.desc.toLowerCase().includes(searchTerm); //[cite: 5]
    return catOk&&srchOk; //[cite: 5]
  }); //[cite: 5]
  grid.innerHTML = filtered.map(p=>`
    <div class="menu-card" onclick="openProd(${p.id})">
      <div class="card-img-wrap">
  <img src="${p.img}" alt="${p.name}" loading="lazy">
</div>

      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <span class="card-price">$${p.price.toFixed(2)}</span>
          <button class="add-btn">Agregar</button>
        </div>
        <span class="view-link">Ver detalles</span>
      </div>
    </div>
  `).join(''); //[cite: 5]
}

function filterCat(cat, btn){
  currentCat = cat; //[cite: 5]
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active')); //[cite: 5]
  if(btn) btn.classList.add('active'); //[cite: 5]
  document.getElementById('section-lbl').textContent = cat==='Todos'?'Menú Especial "Qpinta"':cat; //[cite: 5]
  renderMenu(); //[cite: 5]
}

function filterMenu(){
  searchTerm = document.getElementById('search-inp').value.toLowerCase(); //[cite: 5]
  renderMenu(); //[cite: 5]
}

function openProd(id){
  currentProd = MENU.find(p=>p.id===id); //[cite: 5]
  currentSelections = {}; //[cite: 5]
  currentQty = 1; //[cite: 5]
  currentProd.groups.forEach((g,gi)=>{ //[cite: 5]
    if(g.type==='radio') currentSelections[gi]=0; //[cite: 5]
    else currentSelections[gi]=[]; //[cite: 5]
  }); //[cite: 5]
  document.getElementById('mod-title').textContent = 'Personalizar "'+currentProd.name+'"'; //[cite: 5]
  renderModal(); //[cite: 5]
  document.getElementById('prod-overlay').classList.add('open'); //[cite: 5]
  updateTotal(); //[cite: 5]
}

function renderModal(){
  const p = currentProd;
  let html = `
    <div class="modal-product">
      <div class="modal-img-wrap">
        <img src="${p.img}" alt="${p.name}">
      </div>
      <div class="modal-info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p class="base-price">Precio base: $${p.price.toFixed(2)}</p>
      </div>
    </div>
    <div class="qty-row">
      <span style="font-size:14px;font-weight:600;color:var(--muted);margin-right:4px">Cantidad:</span>
      <button class="qty-btn" onclick="changeQty(-1)">−</button>
      <span class="qty-val" id="qty-display">${currentQty}</span>
      <button class="qty-btn" onclick="changeQty(1)">+</button>
    </div>
  `;

  // Mapea qué opción específica está seleccionada en cada índice de grupo
  const activeSelectionsByGroup = {};
  p.groups.forEach((g, gi) => {
    if (g.type === 'radio' && currentSelections[gi] !== undefined) {
      const selectedOpt = g.opts[currentSelections[gi]];
      if (selectedOpt) {
        activeSelectionsByGroup[gi] = selectedOpt.name;
      }
    }
  });

  p.groups.forEach((g, gi) => {
    // Si el grupo depende de una selección previa, verificamos que el valor esté en un grupo anterior
    if (g.soloPara) {
      const cumpleCondicion = Object.keys(activeSelectionsByGroup).some(gIdx => {
        return parseInt(gIdx) < gi && g.soloPara.includes(activeSelectionsByGroup[gIdx]);
      });
      if (!cumpleCondicion) return; 
    }

    const badge = g.req ? '<span>Requerido</span>' : '';
    html += `<div class="opt-group">
      <div class="opt-group-title"> ${g.name} ${badge}</div>`;
    
    g.opts.forEach((o, oi) => {
      const sel = g.type === 'radio' ? currentSelections[gi] === oi : currentSelections[gi].includes(oi);
      const cls = (g.type === 'remove' ? 'opt-item remove-item' : 'opt-item') + (sel ? ' selected' : '');
      const ctrl = g.type === 'radio' ? 
        `<div class="opt-radio"><div class="opt-radio-inner"></div></div>` : 
        `<div class="opt-check">${sel ? '✓' : ''}</div>`;
       
      html += `<div class="${cls}" onclick="selectOpt(${gi},${oi})">
        <div class="opt-item-left">${ctrl}<span class="opt-name">${o.name}</span></div>
      </div>`;
    });
    html += '</div>';
  });

  // El bloque de aderezos estructurado con opciones múltiples (Checkboxes nativos ocultos con estilos de la app)
  if (p.cat !== 'Pizzas' && p.cat !== 'Empanadas') {
    const listadoAderezos = ['Apio','Mayonesa','Mostaza','AJi','Ketchup','Barbacoa','Parmesano','Cheddar', 'Sin aderezos'];
    
    html += `<div class="opt-group">
      <div class="opt-group-title">Elegí tus Aderezos</div>`;
      
    listadoAderezos.forEach((aderezo, idx) => {
      html += `
        <label class="opt-item" style="display: flex; width: 100%; cursor: pointer;">
          <div class="opt-item-left">
            <input type="checkbox" name="aderezos-seleccionados" value="${aderezo}" style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer;">
            <span class="opt-name">${aderezo}</span>
          </div>
        </label>
      `;
    });
    
    html += `</div>`;
  }
  
  document.getElementById('mod-body').innerHTML = html;
}


function changeQty(d){
  currentQty = Math.max(1,currentQty+d); //[cite: 5]
  document.getElementById('qty-display').textContent = currentQty; //[cite: 5]
  updateTotal(); //[cite: 5]
}

function selectOpt(gi, oi){
  const g = currentProd.groups[gi];
  if(g.type === 'radio'){
    currentSelections[gi] = oi;

    // Recalcular selecciones válidas en cascada para limpiar grupos ocultos
    const activeSelectionsByGroup = {};
    currentProd.groups.forEach((group, gIdx) => {
      if (group.type === 'radio' && currentSelections[gIdx] !== undefined) {
        const selectedOpt = group.opts[currentSelections[gIdx]];
        if (selectedOpt) {
          activeSelectionsByGroup[gIdx] = selectedOpt.name;
        }
      }

      // Si el grupo actual no cumple con las condiciones de los grupos anteriores, se resetea
      if (group.soloPara) {
        const cumpleCondicion = Object.keys(activeSelectionsByGroup).some(prevGIdx => {
          return parseInt(prevGIdx) < gIdx && group.soloPara.includes(activeSelectionsByGroup[prevGIdx]);
        });
        if (!cumpleCondicion) {
          if (group.type === 'radio') {
            currentSelections[gIdx] = undefined;
          } else {
            currentSelections[gIdx] = [];
          }
        }
      }
    });

    // Asignar por defecto el primer elemento si un grupo requerido quedó indefinido tras el filtro
    currentProd.groups.forEach((group, gIdx) => {
      if (group.type === 'radio' && group.req && currentSelections[gIdx] === undefined) {
        if (group.soloPara) {
          const cumpleCondicion = Object.keys(activeSelectionsByGroup).some(prevGIdx => {
            return parseInt(prevGIdx) < gIdx && group.soloPara.includes(activeSelectionsByGroup[prevGIdx]);
          });
          if (cumpleCondicion) currentSelections[gIdx] = 0;
        } else {
          currentSelections[gIdx] = 0;
        }
      }
    });

  } else {
    const arr = currentSelections[gi];
    const idx = arr.indexOf(oi);
    if(idx >= 0) arr.splice(idx, 1); else arr.push(oi);
  }
  renderModal();
  updateTotal();
}

function calcItemTotal(){
  if(!currentProd) return 0; //[cite: 5]
  let t = currentProd.price; //[cite: 5]
  
  const activeRadioNames = []; //[cite: 5]
  currentProd.groups.forEach((g, gi) => { //[cite: 5]
    if (g.type === 'radio' && !g.soloPara && currentSelections[gi] !== undefined) { //[cite: 5]
      const selectedOpt = g.opts[currentSelections[gi]]; //[cite: 5]
      if (selectedOpt) activeRadioNames.push(selectedOpt.name); //[cite: 5]
    } //[cite: 5]
  }); //[cite: 5]

  currentProd.groups.forEach((g, gi) => { //[cite: 5]
    if (g.soloPara && !g.soloPara.some(name => activeRadioNames.includes(name))) { //[cite: 5]
      return; //[cite: 5]
    } //[cite: 5]

    if(g.type === 'radio'){ //[cite: 5]
      const o = g.opts[currentSelections[gi]]; //[cite: 5]
      if (o) t += o.extra; //[cite: 5]
    } else { //[cite: 5]
      if (currentSelections[gi]) { //[cite: 5]
        currentSelections[gi].forEach(oi => { //[cite: 5]
          const o = g.opts[oi]; //[cite: 5]
          if (o) t += o.extra; //[cite: 5]
        }); //[cite: 5]
      } //[cite: 5]
    } //[cite: 5]
  }); //[cite: 5]
  return t * currentQty; //[cite: 5]
}

function updateTotal(){
  document.getElementById('mod-total').textContent = '$'+calcItemTotal().toFixed(2); //[cite: 5]
}

function closeProd(e){
  if(e.target===document.getElementById('prod-overlay')) closeProdForce(); //[cite: 5]
}
function closeProdForce(){
  document.getElementById('prod-overlay').classList.remove('open'); //[cite: 5]
}

function addToCart(){
  const p = currentProd;
  const opts = [];
  
  // 1. Mapear qué opción de tipo radio está activa en cada índice de grupo
  const activeSelectionsByGroup = {};
  p.groups.forEach((g, gi) => {
    if (g.type === 'radio' && currentSelections[gi] !== undefined) {
      const selectedOpt = g.opts[currentSelections[gi]];
      if (selectedOpt) {
        activeSelectionsByGroup[gi] = selectedOpt.name;
      }
    }
  });

  // 2. Recorrer y agregar solo los grupos que cumplen las condiciones de visibilidad
  p.groups.forEach((g, gi) => {
    if (g.soloPara) {
      const cumpleCondicion = Object.keys(activeSelectionsByGroup).some(prevGIdx => {
        return parseInt(prevGIdx) < gi && g.soloPara.includes(activeSelectionsByGroup[prevGIdx]);
      });
      if (!cumpleCondicion) return; 
    }

    const groupLabel = g.name ? g.name + ': ' : '';

    if(g.type === 'radio'){
      if(g.opts[currentSelections[gi]]) {
        opts.push(groupLabel + g.opts[currentSelections[gi]].name);
      }
    } else {
      if(currentSelections[gi] && currentSelections[gi].length > 0){
        opts.push(groupLabel + currentSelections[gi].map(i => g.opts[i].name).join(', '));
      }
    }
  });

  // 3. Capturar dinámicamente los aderezos seleccionados en el modal
  const checkboxes = document.querySelectorAll('input[name="aderezos-seleccionados"]:checked');
  const aderezosElegidos = Array.from(checkboxes).map(cb => cb.value);
  
  if (aderezosElegidos.length > 0) {
    opts.push("Aderezos: " + aderezosElegidos.join(', '));
  }

  // 4. Insertar al carrito con el precio correctamente calculado
  cart.push({
    id: Date.now(),
    name: p.name,
    emoji: p.emoji,
    qty: currentQty,
    unitPrice: calcItemTotal() / currentQty,
    total: calcItemTotal(),
    opts,
    notes: '' // Se limpia la variable notes al procesarse ahora dentro de opts de forma explícita
  });

  updateCartCount();
  closeProdForce();
  showToast('Producto agregado al carrito 🛒');
}

function updateCartCount(){
  const total = cart.reduce((s,i)=>s+i.qty,0); //[cite: 5]
  document.getElementById('cart-count').textContent = total; //[cite: 5]
}

function showToast(msg){
  const t = document.createElement('div'); //[cite: 5]
  t.style.cssText='position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:var(--navy);color:#fff;padding:10px 20px;border-radius:50px;font-family:Nunito,sans-serif;font-size:14px;font-weight:600;z-index:999;animation:fadeIn .3s'; //[cite: 5]
  t.textContent=msg; //[cite: 5]
  document.body.appendChild(t); //[cite: 5]
  setTimeout(()=>t.remove(),2500); //[cite: 5]
}

function openCart(){
  renderCart(); //[cite: 5]
  document.getElementById('cart-overlay').classList.add('open'); //[cite: 5]
}
function closeCart(){document.getElementById('cart-overlay').classList.remove('open')} //[cite: 5]
function closeCartEv(e){if(e.target===document.getElementById('cart-overlay'))closeCart()} //[cite: 5]

function renderCart(){
  const body = document.getElementById('cart-body'); //[cite: 5]
  if(cart.length===0){ //[cite: 5]
    body.innerHTML='<div class="empty-cart"><div class="big">🛒</div><p>Tu carrito está vacío</p></div>'; //[cite: 5]
    return; //[cite: 5]
  } //[cite: 5]
  const grandTotal = cart.reduce((s,i)=>s+i.total,0); //[cite: 5]
  let html = cart.map(item=>`
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${item.emoji || ''} ${item.name} x${item.qty}</div>
        <div class="cart-item-opts">${item.opts.join(' · ')}</div>
        ${item.notes?`<div class="cart-item-opts" style="font-style:italic">📝 ${item.notes}</div>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="cart-item-price">$${item.total.toFixed(2)}</span>
        <button class="del-btn" onclick="removeItem(${item.id})">Eliminar</button>
      </div>
    </div>
  `).join(''); //[cite: 5]
  html += `<div class="total-row"><span>Total del pedido</span><span>$${grandTotal.toFixed(2)}</span></div>`; //[cite: 5]
  
  html += `
    <div style="margin: 16px 0 12px 0; text-align: left;">
      <label for="cart-address" style="font-weight:700; font-size:14px; color:var(--navy); display:block; margin-bottom:6px;">Dirección de Entrega (Solo envios en Coronel Moldes):</label>
      <input type="text" id="cart-address" class="phone-input" placeholder="Ej: Av. Belgrano 1234, Barrio Centro" value="${direccionEntrega}" oninput="direccionEntrega = this.value" style="width:100%; box-sizing:border-box;">
    </div>
  `;
  
  html += `
    <div style="margin: 0 0 16px 0; text-align: left;">
      <label for="cart-payment" style="font-weight:700; font-size:14px; color:var(--navy); display:block; margin-bottom:6px;">Forma de Pago:</label>
      <select id="cart-payment" class="phone-input" onchange="metodoPago = this.value" style="width:100%; box-sizing:border-box; background: #fff; padding: 10px 16px;">
        <option value="" ${metodoPago === '' ? 'selected' : ''} disabled>-- Seleccioná cómo vas a pagar --</option>
        <option value="Efectivo" ${metodoPago === 'Efectivo' ? 'selected' : ''}>Efectivo</option>
        <option value="Transferencia" ${metodoPago === 'Transferencia' ? 'selected' : ''}>Transferencia</option>
        <option value="Tarjeta" ${metodoPago === 'Tarjeta' ? 'selected' : ''}>Tarjeta (Débito/Crédito)</option>
      </select>
    </div>
  `;
  
  html += `<button class="pdf-btn" onclick="generatePDF()">Descargar resumen PDF</button>`; //[cite: 5]
  html += `<button class="wpp-btn" onclick="sendWhatsApp()">Enviar pedido por WhatsApp</button>`; //[cite: 5]
  body.innerHTML = html; //[cite: 5]
}

function removeItem(id){
  cart = cart.filter(i=>i.id!==id); //[cite: 5]
  updateCartCount(); //[cite: 5]
  renderCart(); //[cite: 5]
}

function buildPedidoText(){
  const grandTotal = cart.reduce((s,i)=>s+i.total,0); //[cite: 5]
  let msg = '🍔 *PEDIDO QPINTA*\n─────────────────\n'; //[cite: 5]
  cart.forEach((item,idx)=>{ //[cite: 5]
    msg += `*${idx+1}. ${item.name}* x${item.qty}\n`; //[cite: 5]
    item.opts.forEach(o=>{ msg += `   • ${o}\n`; }); //[cite: 5]
    if(item.notes) msg += `   📝 ${item.notes}\n`; //[cite: 5]
    msg += `   Subtotal: $${item.total.toFixed(2)}\n\n`; //[cite: 5]
  }); //[cite: 5]
  msg += '─────────────────\n'; //[cite: 5]
  msg += `📍 *DIRECCIÓN:* ${direccionEntrega.trim()}\n`;
  msg += `💳 *FORMA DE PAGO:* ${metodoPago}\n`;
  msg += '─────────────────\n'; //[cite: 5]
  msg += `💰 *TOTAL: $${grandTotal.toFixed(2)}*\n\n_Pedido generado desde Qpinta Menu_`; //[cite: 5]
  return msg; //[cite: 5]
}

function sendWhatsApp(){
  if(cart.length===0){alert('El carrito está vacío');return;} //[cite: 5]
  
  if(!direccionEntrega.trim()){
    alert('Por favor, ingresá una dirección de entrega antes de enviar el pedido.');
    const input = document.getElementById('cart-address');
    if(input) input.focus();
    return;
  }
  
  if(!metodoPago){
    alert('Por favor, seleccioná una forma de pago antes de enviar el pedido.');
    const select = document.getElementById('cart-payment');
    if(select) select.focus();
    return;
  }
  
  const msg = buildPedidoText(); //[cite: 5]
  window.open('https://wa.me/'+TELEFONO_LOCAL+'?text='+encodeURIComponent(msg),'_blank'); //[cite: 5]
}

function generatePDF(){
  if(cart.length===0){alert('El carrito está vacío');return;} //[cite: 5]
  const grandTotal = cart.reduce((s,i)=>s+i.total,0); //[cite: 5]
  const now = new Date(); //[cite: 5]
  const fecha = now.toLocaleDateString('es-AR'); //[cite: 5]
  const hora = now.toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'}); //[cite: 5]
  
  let htmlCode = "<!DOCTYPE html><html><head><meta charset='utf-8'>" + //[cite: 5]
  "<style>" + //[cite: 5]
    "body{font-family:Arial,sans-serif;padding:40px;color:#1a2a5e;max-width:600px;margin:0 auto}" + //[cite: 5]
    ".logo{font-size:28px;font-weight:900;color:#1a2a5e;margin-bottom:4px}" + //[cite: 5]
    ".sub{color:#6b7db3;font-size:13px;margin-bottom:24px}" + //[cite: 5]
    ".divider{border-top:2px solid #e8b84b;margin:16px 0}" + //[cite: 5]
    ".item{margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid #d0d8f0}" + //[cite: 5]
    ".item-name{font-weight:700;font-size:16px}" + //[cite: 5]
    ".item-opt{font-size:13px;color:#6b7db3;margin-top:3px}" + //[cite: 5]
    ".item-price{font-weight:700;color:#243580;margin-top:6px}" + //[cite: 5]
    ".total{font-size:22px;font-weight:900;color:#1a2a5e;padding:16px 0}" + //[cite: 5]
    ".footer{font-size:11px;color:#6b7db3;margin-top:24px;text-align:center}" + //[cite: 5]
  "</style></head><body>" + //[cite: 5]
  "<div class='logo'>🍔 Qpinta</div>" + //[cite: 5]
  "<div class='sub'>Resumen de pedido · " + fecha + " " + hora + "</div>" + //[cite: 5]
  "<div class='divider'></div>"; //[cite: 5]
  
  if(direccionEntrega.trim()){
    htmlCode += "<div style='font-size:14px; margin-bottom:6px;'><strong>📍 Dirección de entrega:</strong> " + direccionEntrega.trim() + "</div>";
  }
  if(metodoPago){
    htmlCode += "<div style='font-size:14px; margin-bottom:12px;'><strong>💳 Forma de pago:</strong> " + metodoPago + "</div>";
  }
  if(direccionEntrega.trim() || metodoPago){
    htmlCode += "<div class='divider'></div>";
  }
  
  cart.forEach((item,i)=>{ //[cite: 5]
    htmlCode += "<div class='item'>" + //[cite: 5]
      "<div class='item-name'>" + (i+1) + ". " + (item.emoji || '') + " " + item.name + " (x" + item.qty + ")</div>"; //[cite: 5]
      
    item.opts.forEach(o => { //[cite: 5]
      htmlCode += "<div class='item-opt'>• " + o + "</div>"; //[cite: 5]
    }); //[cite: 5]
    
    if(item.notes){ //[cite: 5]
      htmlCode += "<div class='item-opt' style='font-style:italic'>📝 " + item.notes + "</div>"; //[cite: 5]
    } //[cite: 5]
    
    htmlCode += "<div class='item-price'>Subtotal: $" + item.total.toFixed(2) + "</div>" + //[cite: 5]
    "</div>"; //[cite: 5]
  }); //[cite: 5]
  
  htmlCode += "<div class='divider'></div>" + //[cite: 5]
  "<div class='total'>💰 TOTAL: $" + grandTotal.toFixed(2) + "</div>" + //[cite: 5]
  "<div class='footer'>Pedido generado en Qpinta · " + fecha + "</div>" + //[cite: 5]
  "</body></html>"; //[cite: 5]
  
  const blob = new Blob([htmlCode],{type:'text/html'}); //[cite: 5]
  const url = URL.createObjectURL(blob); //[cite: 5]
  const a = document.createElement('a'); //[cite: 5]
  a.href=url; a.download='pedido-qpinta.html'; a.click(); //[cite: 5]
  URL.revokeObjectURL(url); //[cite: 5]
  showToast('Resumen descargado ✅'); 
}

function closePopupForce() {
  const popup = document.getElementById('promo-popup'); //[cite: 5]
  if (popup) { //[cite: 5]
    popup.classList.add('hidden'); //[cite: 5]
  } //[cite: 5]
}

function closePopupEv(e) {
  if (e.target === document.getElementById('promo-popup')) { //[cite: 5]
    closePopupForce(); //[cite: 5]
  } //[cite: 5]
}

function goToPromosFromPopup() {
  closePopupForce();  //[cite: 5]
  
  const promoBtn = document.getElementById('btn-cat-promos'); //[cite: 5]
  if (promoBtn) { //[cite: 5]
    filterCat('Promos', promoBtn); //[cite: 5]
    
    const sectionTitle = document.getElementById('section-lbl'); //[cite: 5]
    if (sectionTitle) { //[cite: 5]
      sectionTitle.scrollIntoView({ behavior: 'smooth' }); //[cite: 5]
    } //[cite: 5]
  } //[cite: 5]
}
renderMenu(); //[cite: 5]
