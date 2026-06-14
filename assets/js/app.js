const ACTIVE_PAYLOAD_HASHES = [ /* INSERT_ACTIVE_HASHES_HERE */ ];

        const svgPaths = {
            lock: `<path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/>`,
            key: `<path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"/>`,
            folder: `<path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"/>`,
            star: `<path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L256 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L318 150.2 252.7 17.8a31.97 31.97 0 0 0-58.4 0z"/>`,
            shield: `<path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C381.5 463.7 496 326.5 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.3 430.7c-70.5-35.8-154-138-154-256V128l154-64.2L410.3 128v46.7c0 118-83.5 220.2-154 256z"/>`,
            refresh: `<path d="M440.65 12.57l4 82.77A24 24 0 0 1 420.73 119l-82.42-4.58c-11.41-.63-18.39-13.1-12.84-23.06l26.94-48.45C305.81 12.35 244.62 8 186.27 25.86 102.77 51.49 41.24 122.95 24.31 209.68 5.76 304.5 54.34 397.02 140.73 441.72c83.74 43.34 186.27 28.56 254.14-33.88 7.07-6.52 7.73-17.65 1.54-24.96l-24.77-29.21c-5.83-6.88-16.14-8.08-23.4-2.73-45.74 33.62-108.83 41.87-162.7 18.06-61.9-27.35-100.93-94-91.07-161.76 8.35-57.51 51.52-105.79 109.11-120.35 48.51-12.28 98.71-4.14 139.77 20.31l-36.6 44.83c-6.87 8.42-2.15 21.32 8.7 23.36z"/>`,
            check: `<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>`,
            trash: `<path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0z"/>`,
            copy: `<path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h140.1L400 115.9V320c0 8.8-7.2 16-16 16zM192 16C165.5 16 144 37.5 144 64v256c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V115.9c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1H192zM64 128H32c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-32h-48v32H48V176h16v-48z"/>`
        };



        function genId() { return 'pwd_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36); }
        function genListId() { return 'lst_' + Math.random().toString(36).substr(2, 9); }

        let secureLinks = JSON.parse(localStorage.getItem('secure_links_v17'));
        let secureCustomLists = JSON.parse(localStorage.getItem('secure_playlists_v1')) || [];

        if (!secureLinks) {
            const oldLinks = JSON.parse(localStorage.getItem('secure_links_v16')) || JSON.parse(localStorage.getItem('secure_links_v15')) || [];
            secureLinks = oldLinks.map(link => {
                if(!link.masterKey) link.masterKey = CryptoJS.lib.WordArray.random(16).toString();
                regenerateLinkCryptography(link, true);
                return link;
            });
            localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
        }

        let needsMigration = false;
        secureLinks.forEach(link => {
            if (link.passwords) {
                link.passwords.forEach(p => {
                    if (!p.id) { p.id = genId(); needsMigration = true; }
                });
            }
        });
        if (needsMigration) localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));

        let currentEditId = null;
        let currentCustomListId = null;
        let tempUiIconType = 'pre';
        let tempUiIconVal = 'lock';
        let isSyncingTitle = false;
        
        let confirmCallback = null;
        let promptCallback = null;

        function customAlert(msg, title="Aviso") {
            document.getElementById('custom-alert-title').innerText = title;
            document.getElementById('custom-alert-msg').innerText = msg;
            document.getElementById('custom-alert').classList.remove('hidden');
        }
        function closeAlert() { document.getElementById('custom-alert').classList.add('hidden'); }

        function customConfirm(msg, callback, title="Confirmação", confirmBtnText="Confirmar") {
            document.getElementById('custom-confirm-title').innerText = title;
            document.getElementById('custom-confirm-msg').innerText = msg;
            document.getElementById('btn-confirm-action').innerText = confirmBtnText;
            confirmCallback = callback;
            document.getElementById('custom-confirm').classList.remove('hidden');
        }
        function closeConfirm(result) {
            document.getElementById('custom-confirm').classList.add('hidden');
            if(result && confirmCallback) confirmCallback();
            confirmCallback = null;
        }

        function customPrompt(title, defaultVal, callback) {
            document.getElementById('custom-prompt-title').innerText = title;
            document.getElementById('custom-prompt-input').value = defaultVal || '';
            promptCallback = callback;
            document.getElementById('custom-prompt').classList.remove('hidden');
            document.getElementById('custom-prompt-input').focus();
        }
        function closePrompt(val) {
            document.getElementById('custom-prompt').classList.add('hidden');
            if(val !== null && promptCallback) promptCallback(val);
            promptCallback = null;
        }

        window.addEventListener('DOMContentLoaded', () => {
            
            let paramsString = window.location.hash.substring(1) || window.location.search.substring(1);
            const urlParams = new URLSearchParams(paramsString);
            const favicon = document.getElementById('dynamic-favicon');
            
            if (urlParams.get('p')) { 
                const visitorScreen = document.getElementById('visitor-screen');
                visitorScreen.classList.remove('hidden'); 
                favicon.href = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='#ffffff'>" + svgPaths.lock + "</svg>");
                
                const pParam = urlParams.get('p');
                if (ACTIVE_PAYLOAD_HASHES && ACTIVE_PAYLOAD_HASHES.length > 0) {
                    const currentHash = CryptoJS.SHA256(pParam).toString();
                    if (!ACTIVE_PAYLOAD_HASHES.includes(currentHash)) {
                        applyVisitorIcon('pre', 'lock');
                        document.getElementById('visitor-icon-container').innerHTML = `<svg class="icon-lock" viewBox="0 0 448 512" fill="#e53935">${svgPaths.lock}</svg>`;
                        document.getElementById('main-title').innerText = "Este link foi desabilitado ou expirou.";
                        document.getElementById('sub-title').innerText = "Seu redirecionamento foi cancelado pelo administrador.";
                        document.getElementById('sub-title').classList.remove('hidden');
                        document.getElementById('unlock-form').classList.add('hidden');
                        document.querySelector('.btn-cancelar').classList.add('hidden');
                        document.title = "Link Expirado";
                        return;
                    }
                }

                let pageTitle = "Acesso"; let mainTxt = "Digite a senha para acessar o link"; let subTxt = "";
                let iType = 'pre'; let iVal = 'lock';

                const uiParam = urlParams.get('ui');
                if (uiParam) {
                    try {
                        let decUi = uiParam.replace(/-/g, '+').replace(/_/g, '/'); while (decUi.length % 4) decUi += '=';
                        const uiData = JSON.parse(decodeURIComponent(escape(atob(decUi))));
                        pageTitle = uiData.t || pageTitle; if (uiData.m) mainTxt = uiData.m; if (uiData.s) subTxt = uiData.s;
                        if (uiData.it) iType = uiData.it; if (uiData.iv) iVal = uiData.iv;
                    } catch(e) {}
                } else {
                    const nParam = urlParams.get('n');
                    if (nParam) { try { let decN = nParam.replace(/-/g, '+').replace(/_/g, '/'); while (decN.length % 4) decN += '='; pageTitle = decodeURIComponent(escape(atob(decN))); } catch(e) {} }
                }

                document.title = pageTitle;
                document.getElementById('main-title').innerText = mainTxt;
                if (subTxt) { document.getElementById('sub-title').innerText = subTxt; document.getElementById('sub-title').classList.remove('hidden'); }
                applyVisitorIcon(iType, iVal);
            } else { 
                document.getElementById('admin-screen').classList.remove('hidden'); 
                document.title = "Painel do Administrador";
                favicon.href = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' fill='#ffffff'><path d='M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z'/></svg>");
                renderAdminTable(); renderCustomListsTable(); 
            }
        });

        function toggleSyncTitle() {
            isSyncingTitle = !isSyncingTitle;
            const btn = document.getElementById('btn-sync-title');
            if(isSyncingTitle) {
                btn.style.background = 'rgba(29, 126, 217, 0.2)';
                btn.style.color = '#1d7ed9';
                document.getElementById('edit-ui-title').value = document.getElementById('edit-link-name').value;
            } else {
                btn.style.background = '#333';
                btn.style.color = '#777';
            }
        }

        function handleNameSync() {
            if(isSyncingTitle) document.getElementById('edit-ui-title').value = document.getElementById('edit-link-name').value;
        }

        function turnOffSync() {
            isSyncingTitle = false;
            const btn = document.getElementById('btn-sync-title');
            btn.style.background = '#333'; btn.style.color = '#777';
        }

        function applyVisitorIcon(type, val) {
            const container = document.getElementById('visitor-icon-container');
            const favicon = document.getElementById('dynamic-favicon');
            
            if (type === 'emoji') {
                container.innerHTML = `<div style="font-size: 42px; line-height: 1;">${val}</div>`;
                favicon.href = `data:image/svg+xml,` + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${val}</text></svg>`);
            } else if (type === 'custom') {
                container.innerHTML = `<div style="width: 42px; height: 42px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">${val}</div>`;
                const svgEl = container.querySelector('svg');
                if(svgEl) { svgEl.style.width = '100%'; svgEl.style.height = '100%'; if(!svgEl.getAttribute('fill')) svgEl.setAttribute('fill', '#ffffff'); }
                if(val.startsWith('<img')) {
                    const srcMatch = val.match(/src="([^"]+)"/);
                    if(srcMatch) favicon.href = srcMatch[1];
                } else {
                    favicon.href = `data:image/svg+xml,` + encodeURIComponent(val);
                }
            } else if (type === 'fontawesome') {
                const cleanVal = val.replace(/\.svg$/, '');
                fetch(`https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@master/svgs/${cleanVal}.svg`)
                .then(res => res.text())
                .then(svgTxt => {
                    container.innerHTML = `<div style="width: 42px; height: 42px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">${svgTxt}</div>`;
                    const svgEl = container.querySelector('svg');
                    if(svgEl) { svgEl.style.width = '100%'; svgEl.style.height = '100%'; svgEl.setAttribute('fill', '#ffffff'); }
                    favicon.href = `data:image/svg+xml,` + encodeURIComponent(svgTxt.replace('<svg ', "<svg fill='#ffffff' "));
                }).catch(() => {
                    container.innerHTML = `<div style="font-size: 42px; line-height: 1;">🔗</div>`;
                });
            } else {
                const path = svgPaths[val] || svgPaths.lock;
                container.innerHTML = `<svg class="icon-lock" viewBox="0 0 512 512" fill="#ffffff">${path}</svg>`;
                favicon.href = `data:image/svg+xml,` + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#ffffff'>${path}</svg>`);
            }
        }

        function positionDropdown(dropdownEl, triggerEl) {
            const triggerRect = triggerEl.getBoundingClientRect();
            const dropdownWidth = dropdownEl.offsetWidth || 250;
            const viewportWidth = window.innerWidth;
            // Reset positions
            dropdownEl.style.right = '';
            dropdownEl.style.left = '';
            // If opening to the right would overflow the viewport, open to the left
            if (triggerRect.left + dropdownWidth > viewportWidth - 10) {
                dropdownEl.style.right = '0';
                dropdownEl.style.left = 'auto';
            } else {
                dropdownEl.style.left = '0';
                dropdownEl.style.right = 'auto';
            }
        }

        function toggleDropdown(id, triggerEl) {
            const menu = document.getElementById(id);
            const isActive = menu.classList.contains('active');
            const arrow = document.getElementById('btn-arquivos-arrow');
            document.querySelectorAll('.dropdown-menu').forEach(el => el.classList.remove('active'));
            if (arrow) arrow.style.transform = 'rotate(0deg)';
            
            if (!isActive) {
                menu.classList.add('active');
                if (triggerEl) positionDropdown(menu, triggerEl);
                if (arrow) arrow.style.transform = 'rotate(180deg)';
            }
        }

        // Custom Select Logic
        function toggleCustomSelect(selectId, triggerEl) {
            const tray = document.getElementById(`tray-${selectId}`);
            const arrow = document.getElementById(`arrow-${selectId}`);
            const isActive = tray.classList.contains('active');
            
            document.querySelectorAll('.dropdown-menu').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.custom-select-arrow').forEach(arr => {
                if(arr.id.startsWith('arrow-')) arr.style.transform = 'rotate(0deg)';
            });
            const arquivosArrow = document.getElementById('btn-arquivos-arrow');
            if(arquivosArrow) arquivosArrow.style.transform = 'rotate(0deg)';

            if (!isActive) {
                tray.classList.add('active');
                if (triggerEl) positionDropdown(tray, triggerEl);
                if (arrow) arrow.style.transform = 'rotate(180deg)';
            }
        }

        function applyCustomSelectValue(selectId, value, text) {
            const select = document.getElementById(selectId);
            const textEl = document.getElementById(`text-${selectId}`);
            
            select.value = value;
            if (textEl) textEl.innerText = text;
            
            const tray = document.getElementById(`tray-${selectId}`);
            const arrow = document.getElementById(`arrow-${selectId}`);
            if (tray) tray.classList.remove('active');
            if (arrow) arrow.style.transform = 'rotate(0deg)';
            
            select.dispatchEvent(new Event('change'));
        }

        function buildCustomTray(selectId) {
            const select = document.getElementById(selectId);
            const tray = document.getElementById(`tray-${selectId}`);
            const textEl = document.getElementById(`text-${selectId}`);
            if (!select || !tray) return;

            tray.innerHTML = '';
            let selectedText = '';

            Array.from(select.options).forEach(opt => {
                if (opt.selected) selectedText = opt.text;
                const btn = document.createElement('button');
                btn.className = 'btn-dropdown';
                btn.type = 'button';
                if (opt.value === select.value) {
                    btn.style.color = '#1d7ed9';
                }
                btn.innerText = opt.text;
                btn.onclick = (e) => {
                    e.preventDefault();
                    applyCustomSelectValue(selectId, opt.value, opt.text);
                    buildCustomTray(selectId); 
                };
                tray.appendChild(btn);
            });

            if (textEl && selectedText) {
                textEl.innerText = selectedText;
            }
        }

        function smartDelete() {
            const editModal = document.getElementById('edit-modal');
            if (editModal && !editModal.classList.contains('hidden')) {
                const checkedMasters = document.querySelectorAll('.list-group-title input[type="checkbox"]:checked');
                const checkedPasswords = document.querySelectorAll('.pwd-checkbox:checked');
                if (checkedMasters.length > 0 || checkedPasswords.length > 0) {
                    customConfirm(`Deseja remover os grupos e/ou senhas selecionados?`, () => {
                        checkedMasters.forEach(cb => cb.closest('.list-group').remove());
                        checkedPasswords.forEach(cb => { const row = cb.closest('.edit-pw-row'); if(row) row.remove(); });
                    }, "Excluir Seleção", "Remover");
                    return;
                }
            }

            const checkedBoxes = document.querySelectorAll('#links-table-body .row-checkbox:checked');
            if (checkedBoxes.length > 0) {
                customConfirm(`Deseja excluir DEFINITIVAMENTE os ${checkedBoxes.length} acesso(s) selecionado(s)?`, () => {
                    const idsToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.dataset.id));
                    idsToDelete.forEach(id => permanentlyDeleteLink(id));
                    secureLinks = secureLinks.filter(l => !idsToDelete.includes(l.id));
                    localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
                    renderAdminTable();
                    customAlert("Acessos excluídos com sucesso.", "Excluído");
                }, "Excluir Seleção", "Excluir");
            } else {
                clearOrphanData();
            }
        }

        function permanentlyDeleteLink(id) {
            const linkKeys = ['secure_links_v15', 'secure_links_v16', 'secure_links_v17'];
            linkKeys.forEach(key => { try { let data = JSON.parse(localStorage.getItem(key)); if (data && Array.isArray(data)) { let filtered = data.filter(item => item.id !== id); localStorage.setItem(key, JSON.stringify(filtered)); } } catch(e) {} });
            let deletedList = JSON.parse(localStorage.getItem('deleted_link_ids_v1')) || [];
            if (!deletedList.includes(id)) { deletedList.push(id); localStorage.setItem('deleted_link_ids_v1', JSON.stringify(deletedList)); }
        }

        function clearOrphanData() {
            customConfirm("Limpeza Profunda: Deseja apagar dados residuais de versões anteriores da memória?\n\nIsso libera espaço e não afeta sua tabela atual.", () => {
                const keysToKeep = ['secure_links_v17', 'secure_playlists_v1', 'deleted_link_ids_v1']; let keysToRemove = [];
                for(let i=0; i<localStorage.length; i++) { 
                    let key = localStorage.key(i); 
                    if((key.startsWith('secure_links_') || key.startsWith('secure_playlists_')) && !keysToKeep.includes(key)) keysToRemove.push(key); 
                }
                keysToRemove.forEach(k => localStorage.removeItem(k)); 
                customAlert("Dados órfãos limpos com sucesso!", "Limpeza Concluída");
            }, "Limpeza de Dados Órfãos", "Limpar Agora");
        }

        function scanAndRecover() {
            let recoveredLinks = 0; let recoveredPlaylists = 0;
            const linkKeys = ['secure_links_v2', 'secure_links_v3', 'secure_links_v4', 'secure_links_v5', 'secure_links_v6', 'secure_links_v7', 'secure_links_v8', 'secure_links_v9', 'secure_links_v10', 'secure_links_v11', 'secure_links_v12', 'secure_links_v13', 'secure_links_v14', 'secure_links_v15', 'secure_links_v16', 'secure_links_v17'];
            const deletedList = JSON.parse(localStorage.getItem('deleted_link_ids_v1')) || [];
            
            linkKeys.forEach(key => {
                const data = JSON.parse(localStorage.getItem(key));
                if(data && Array.isArray(data)) {
                    data.forEach(item => {
                        if (deletedList.includes(item.id)) return;
                        if(!item.passwords) item.passwords = [];
                        item.passwords = item.passwords.map((p, idx) => {
                            if(typeof p === 'string') return { id: genId(), name: `Senha ${idx+1}`, value: p, listName: "Recuperado" };
                            if(!p.id) p.id = genId(); if(!p.listName) p.listName = "Recuperado"; return p;
                        });
                        if(!item.masterKey) item.masterKey = CryptoJS.lib.WordArray.random(16).toString();
                        if(!secureLinks.find(l => l.id === item.id)) { secureLinks.push(item); recoveredLinks++; }
                    });
                }
            });

            const pData = JSON.parse(localStorage.getItem('secure_playlists_v1'));
            if(pData && Array.isArray(pData)) {
                pData.forEach(item => { if(!secureCustomLists.find(p => p.id === item.id)) { secureCustomLists.push(item); recoveredPlaylists++; } });
            }

            if(recoveredLinks > 0 || recoveredPlaylists > 0) {
                localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks)); localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
                renderAdminTable(); renderCustomListsTable(); customAlert(`Varredura concluída!\n${recoveredLinks} acessos e ${recoveredPlaylists} listas recuperadas.`, "Recuperação");
            } else { customAlert("Nenhum dado perdido foi encontrado no navegador.", "Recuperação"); }
        }

        function getGlobalUsedPasswords(excludeLinkId = null) { let used = new Set(); secureLinks.forEach(link => { if (link.id !== excludeLinkId) link.passwords.forEach(p => used.add(p.value)); }); return used; }
        function generateRandomPassword() { const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"; let pass = ""; for (let i = 0; i < 12; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length)); return pass; }
        function generateUniquePassword(usedSet) { let pass; let attempts = 0; do { pass = generateRandomPassword(); attempts++; if(attempts > 500) break; } while (usedSet.has(pass)); usedSet.add(pass); return pass; }
        function fillSingleRandomPassword() { document.getElementById('link-password').value = generateUniquePassword(getGlobalUsedPasswords()); }

        function handleInputChanges() {
            const input = document.getElementById('visitor-password'), btn = document.getElementById('btn-confirmar'), err = document.getElementById('error-message');
            input.classList.remove('error-border'); err.style.display = 'none';
            if (input.value.length > 0) { input.classList.add('active'); btn.classList.add('active'); btn.disabled = false; } else { input.classList.remove('active'); btn.classList.remove('active'); btn.disabled = true; }
        }

        function togglePassword() {
            const input = document.getElementById('visitor-password'), open = document.getElementById('eye-open'), closed = document.getElementById('eye-closed');
            if (input.type === 'password') { input.type = 'text'; open.style.display = 'none'; closed.style.display = 'block'; } else { input.type = 'password'; open.style.display = 'block'; closed.style.display = 'none'; }
            input.focus();
        }

        function toggleAccessType() {
            const type = document.getElementById('access-type').value, singleC = document.getElementById('single-pw-container'), groupC = document.getElementById('group-pw-container');
            if (type === 'single') { singleC.classList.remove('hidden'); groupC.classList.add('hidden'); document.getElementById('link-password').required = true; document.getElementById('single-pwd-name').required = false; document.getElementById('group-quantity').required = false; } 
            else { singleC.classList.add('hidden'); groupC.classList.remove('hidden'); document.getElementById('link-password').required = false; document.getElementById('single-pwd-name').required = false; document.getElementById('group-quantity').required = true; }
        }

        function regenerateLinkCryptography(linkObj, keepMasterKey = true) {
            let masterKey = linkObj.masterKey;
            if (!keepMasterKey || !masterKey) {
                masterKey = CryptoJS.lib.WordArray.random(16).toString();
                linkObj.masterKey = masterKey;
            }

            const payloadBase = CryptoJS.AES.encrypt(linkObj.target, masterKey).toString();
            const wrappedKeys = linkObj.passwords.map(p => CryptoJS.AES.encrypt("OK:" + masterKey, p.value).toString());
            const fullPayload = payloadBase + "||" + wrappedKeys.join("||");
            const urlSafeBase64 = btoa(fullPayload).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            
            const uiConfig = {};
            uiConfig.t = linkObj.uiTitle || linkObj.name;
            if(linkObj.uiMain && linkObj.uiMain !== "Digite a senha para acessar o link") uiConfig.m = linkObj.uiMain;
            if(linkObj.uiSub) uiConfig.s = linkObj.uiSub;
            if(linkObj.uiIconType && linkObj.uiIconType !== 'pre') uiConfig.it = linkObj.uiIconType;
            if(linkObj.uiIconVal && linkObj.uiIconVal !== 'lock') uiConfig.iv = linkObj.uiIconVal;
            
            const encUI = btoa(unescape(encodeURIComponent(JSON.stringify(uiConfig)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
            linkObj.url = `${window.location.href.split('#')[0].split('?')[0]}#p=${urlSafeBase64}&ui=${encUI}`;
        }

        function unlockLink(e) {
            e.preventDefault();
            const input = document.getElementById('visitor-password'), err = document.getElementById('error-message'), pwd = input.value;
            let paramsString = window.location.hash.substring(1) || window.location.search.substring(1);
            let payload = new URLSearchParams(paramsString).get('p');
            if(!payload) return;
            
            payload = payload.replace(/-/g, '+').replace(/_/g, '/'); while (payload.length % 4) payload += '=';
            try {
                const full = atob(payload), parts = full.split("||"), base = parts[0], wrapped = parts.slice(1);
                let decryptedUrl = null;
                if (wrapped.length === 0) { decryptedUrl = CryptoJS.AES.decrypt(base, pwd).toString(CryptoJS.enc.Utf8); } 
                else {
                    let mk = null;
                    for (let i = 0; i < wrapped.length; i++) { try { const decWrap = CryptoJS.AES.decrypt(wrapped[i], pwd).toString(CryptoJS.enc.Utf8); if (decWrap.startsWith("OK:")) { mk = decWrap.substring(3); break; } } catch(e) {} }
                    if (!mk) throw new Error(); decryptedUrl = CryptoJS.AES.decrypt(base, mk).toString(CryptoJS.enc.Utf8);
                }
                if (decryptedUrl && decryptedUrl.startsWith('http')) {
                    // Abre o destino em uma nova aba
                    window.open(decryptedUrl, '_blank');
                    // Tenta fechar a aba atual (funciona quando a aba foi aberta por script)
                    // Se o navegador bloquear, usa fallback redirecionando a aba atual
                    setTimeout(() => {
                        try { window.close(); } catch(e) {}
                        setTimeout(() => {
                            if (!window.closed) { window.location.href = decryptedUrl; }
                        }, 300);
                    }, 100);
                } else { throw new Error(); }
            } catch (errObj) { input.classList.add('error-border'); err.style.display = 'block'; input.value = ''; const btn = document.getElementById('btn-confirmar'); btn.classList.remove('active'); btn.disabled = true; input.focus(); }
        }

        function cancelRedirect() { 
            window.open('', '_self', ''); 
            window.close(); 
            setTimeout(() => {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.replace("about:blank");
                }
            }, 150);
        }

        function generateLink(e) {
            e.preventDefault();
            const name = document.getElementById('link-name').value, target = document.getElementById('target-url').value, type = document.getElementById('access-type').value;
            let passwords = []; let globalUsed = getGlobalUsedPasswords();
            if (type === 'single') {
                const pName = document.getElementById('single-pwd-name').value || "Senha Única", pVal = document.getElementById('link-password').value;
                if (globalUsed.has(pVal)) { customAlert("ERRO: Senha já utilizada.", "Atenção"); return; }
                passwords.push({ id: genId(), name: pName, value: pVal, listName: "Senha Única" });
            } else {
                let qty = parseInt(document.getElementById('group-quantity').value); if(isNaN(qty) || qty < 1) qty = 1; if(qty > 200) qty = 200;
                for(let i = 0; i < qty; i++) passwords.push({ id: genId(), name: `${name} - ${String(i+1).padStart(2,'0')}`, value: generateUniquePassword(globalUsed), listName: name });
            }
            let newLink = { id: Date.now(), name: name, target: target, passwords: passwords, url: "", uiTitle: name, uiMain: "", uiSub: "", uiIconType: "pre", uiIconVal: "lock", masterKey: CryptoJS.lib.WordArray.random(16).toString() };
            regenerateLinkCryptography(newLink, true); secureLinks.unshift(newLink); localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
            document.getElementById('create-form').reset(); toggleAccessType(); renderAdminTable();
        }

        function renderAdminTable() {
            const tbody = document.getElementById('links-table-body'); tbody.innerHTML = '';
            const countEl = document.getElementById('generated-access-count');
            if (countEl) countEl.innerText = secureLinks.length;
            
            const headerCheckbox = document.querySelector('thead .checkbox-cell');
            if (headerCheckbox) {
                if (isReorderingLinks || !isSelectingLinks) headerCheckbox.innerHTML = '';
                else headerCheckbox.innerHTML = '<input type="checkbox" onchange="toggleSelectAllMaster(this)">';
            }

            if (secureLinks.length === 0) { tbody.innerHTML = `<tr><td colspan="5" style="color: #555; text-align: center; padding: 20px;">Nenhum link criado.</td></tr>`; return; }
            secureLinks.forEach(item => {
                const tr = document.createElement('tr'); 
                tr.dataset.id = item.id;
                const lists = new Set(item.passwords.map(p => p.listName));
                
                let firstCell = `<td class="checkbox-cell"></td>`;
                if (isReorderingLinks) {
                    firstCell = `<td class="checkbox-cell"><svg class="ui-icon drag-handle" style="margin:0; width:16px; height:16px; color:#777;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></td>`;
                    tr.setAttribute('draggable', 'true');
                    tr.addEventListener('dragstart', handleDragStart);
                    tr.addEventListener('dragover', handleDragOver);
                    tr.addEventListener('dragleave', handleDragLeave);
                    tr.addEventListener('drop', handleDrop);
                    tr.addEventListener('dragend', handleDragEnd);
                } else if (isSelectingLinks) {
                    firstCell = `<td class="checkbox-cell"><input type="checkbox" class="row-checkbox" data-id="${item.id}"></td>`;
                }

                const isGroup = item.passwords.length > 1;
                const iconSvg = isGroup ? '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:#1d7ed9;"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>' : '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:#1d7ed9;"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>';

                tr.innerHTML = `
                    ${firstCell}
                    <td class="col-truncate" title="${item.name}" style="font-weight: bold; color: #eee; display: flex; align-items: center;">${iconSvg}${item.name}</td>
                    <td class="col-destino-truncate"><a href="${item.target}" target="_blank" style="color: #1d7ed9; text-decoration: none;" title="${item.target}">${item.target}</a></td>
                    <td class="col-truncate">${lists.size} Grupo(s) / ${item.passwords.length} Senha(s)</td>
                    <td class="col-actions">
                        <button onclick="openEditModal(${item.id})" class="btn-action btn-view" ${isReorderingLinks ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>Gerenciar Link</button>
                        <button onclick="copyText('${item.url}', this)" class="btn-action btn-copy" ${isReorderingLinks ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>Copiar URL</button>
                        <button onclick="window.open('${item.url}', '_blank')" class="btn-action btn-copy" ${isReorderingLinks ? 'style="opacity: 0.5; pointer-events: none;"' : ''}>Abrir Link</button>
                    </td>`;
                tbody.appendChild(tr);
            });
        }

        function toggleSelectAllMaster(masterCb) { document.querySelectorAll('#links-table-body .row-checkbox').forEach(b => b.checked = masterCb.checked); }
        
        let isSelectingLinks = false;
        function toggleSelectLinksMode(forceCancel = false) {
            if (isSelectingLinks || forceCancel) {
                isSelectingLinks = false;
                document.getElementById('btn-select-mode').style.background = '#333';
                document.getElementById('btn-select-mode').innerHTML = `Selecionar`;
                renderAdminTable();
            } else {
                if (isReorderingLinks) toggleReorderLinksMode(true);
                isSelectingLinks = true;
                document.getElementById('btn-select-mode').style.background = '#e53935';
                document.getElementById('btn-select-mode').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
                renderAdminTable();
            }
        }

        let isReorderingLinks = false;
        let hasReordered = false;
        let draggedRow = null;

        function toggleReorderLinksMode(forceCancel = false) {
            if (isReorderingLinks || forceCancel) {
                isReorderingLinks = false;
                hasReordered = false;
                document.getElementById('btn-save-reorder').classList.add('invisible-btn');
                document.getElementById('btn-reorder-links').style.background = '#333';
                document.getElementById('btn-reorder-links').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> Editar Ordem`;
                renderAdminTable();
            } else {
                if (isSelectingLinks) toggleSelectLinksMode(true);
                isReorderingLinks = true;
                hasReordered = false;
                document.getElementById('btn-save-reorder').classList.add('invisible-btn');
                document.getElementById('btn-reorder-links').style.background = '#e53935';
                document.getElementById('btn-reorder-links').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
                renderAdminTable();
            }
        }

        function handleDragStart(e) {
            draggedRow = e.target.closest('tr');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggedRow.innerHTML);
            setTimeout(() => draggedRow.classList.add('dragging'), 0);
        }

        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const targetRow = e.target.closest('tr');
            if (targetRow && targetRow !== draggedRow) {
                const bounding = targetRow.getBoundingClientRect();
                const offset = bounding.y + (bounding.height / 2);
                if (e.clientY - offset > 0) {
                    targetRow.style.borderBottom = '2px solid #1d7ed9';
                    targetRow.style.borderTop = '';
                } else {
                    targetRow.style.borderTop = '2px solid #1d7ed9';
                    targetRow.style.borderBottom = '';
                }
            }
        }

        function handleDragLeave(e) {
            const targetRow = e.target.closest('tr');
            if (targetRow) { targetRow.style.borderTop = ''; targetRow.style.borderBottom = ''; }
        }

        function handleDrop(e) {
            e.preventDefault();
            const targetRow = e.target.closest('tr');
            if (targetRow && targetRow !== draggedRow) {
                const bounding = targetRow.getBoundingClientRect();
                const offset = bounding.y + (bounding.height / 2);
                if (e.clientY - offset > 0) targetRow.after(draggedRow);
                else targetRow.before(draggedRow);
                
                if (isReorderingLinks) {
                    document.getElementById('btn-save-reorder').classList.remove('invisible-btn');
                }
            }
            if(targetRow) { targetRow.style.borderTop = ''; targetRow.style.borderBottom = ''; }
        }

        function handleDragEnd(e) {
            if(draggedRow) draggedRow.classList.remove('dragging');
            document.querySelectorAll('#links-table-body tr').forEach(r => { r.style.borderTop = ''; r.style.borderBottom = ''; });
            draggedRow = null;
        }

        function saveLinkOrder() {
            const newOrderIds = Array.from(document.querySelectorAll('#links-table-body tr[data-id]')).map(tr => parseInt(tr.dataset.id));
            const newSecureLinks = [];
            newOrderIds.forEach(id => {
                const link = secureLinks.find(l => l.id === id);
                if (link) newSecureLinks.push(link);
            });
            secureLinks = newSecureLinks;
            localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
            toggleReorderLinksMode(true);
            customAlert("A nova ordem dos acessos foi salva com sucesso!", "Ordem Atualizada");
        }

        function openEditModal(id) {
            currentEditId = id; const item = secureLinks.find(l => l.id === id); if (!item) return;
            document.getElementById('edit-link-name').value = item.name;
            document.getElementById('edit-target-url').value = item.target;
            
            const uiTitleStr = item.uiTitle || item.name;
            document.getElementById('edit-ui-title').value = uiTitleStr;
            isSyncingTitle = (item.name === uiTitleStr);
            const syncBtn = document.getElementById('btn-sync-title');
            if(isSyncingTitle) { syncBtn.style.background = 'rgba(29, 126, 217, 0.2)'; syncBtn.style.color = '#1d7ed9'; } 
            else { syncBtn.style.background = '#333'; syncBtn.style.color = '#777'; }

            updateCustomListsDropdown();

            const listContainer = document.getElementById('edit-modal-list'); listContainer.innerHTML = '';
            const grouped = {};
            item.passwords.forEach(p => { const ln = p.listName || 'Avulsa'; if(!grouped[ln]) grouped[ln] = []; grouped[ln].push(p); });
            for (const [lName, pwds] of Object.entries(grouped)) createGroupInModal(lName, pwds);
            document.getElementById('edit-modal').classList.remove('hidden');
        }

        function updateCustomListsDropdown() {
            setupCustomListAutocomplete();
        }

        function setupCustomListAutocomplete() {
            const input = document.getElementById('add-to-custom-list-input');
            const hidden = document.getElementById('add-to-custom-list-id');
            const tray = document.getElementById('tray-add-to-custom-list');
            if(!input || !tray) return;

            let options = [];
            secureCustomLists.forEach(list => {
                options.push({ id: list.id, label: list.name + (list.suffix || '') });
            });

            input.addEventListener('input', function() {
                const val = this.value.toLowerCase();
                tray.innerHTML = '';
                if(!val) { tray.style.display = 'none'; hidden.value = ''; return; }
                const matches = options.filter(o => o.label.toLowerCase().includes(val));
                if(matches.length === 0) { tray.style.display = 'none'; return; }
                tray.style.display = 'flex';
                matches.forEach(m => {
                    const btn = document.createElement('button');
                    btn.className = 'btn-dropdown';
                    btn.type = 'button';
                    btn.textContent = m.label;
                    btn.onclick = () => {
                        input.value = m.label;
                        hidden.value = m.id;
                        tray.style.display = 'none';
                    };
                    tray.appendChild(btn);
                });
            });

            input.addEventListener('focus', function() {
                if (this.value) this.dispatchEvent(new Event('input'));
                else {
                    tray.innerHTML = '';
                    if(options.length === 0) return;
                    tray.style.display = 'flex';
                    options.forEach(m => {
                        const btn = document.createElement('button');
                        btn.className = 'btn-dropdown';
                        btn.type = 'button';
                        btn.textContent = m.label;
                        btn.onclick = () => {
                            input.value = m.label;
                            hidden.value = m.id;
                            tray.style.display = 'none';
                        };
                        tray.appendChild(btn);
                    });
                }
            });

            document.addEventListener('click', function (e) {
                if (e.target !== input && !tray.contains(e.target)) {
                    tray.style.display = 'none';
                }
            });
        }

        function openUIModal() {
            const item = secureLinks.find(l => l.id === currentEditId); if(!item) return;
            document.getElementById('edit-ui-title').value = item.uiTitle || item.name;
            document.getElementById('edit-ui-main').value = item.uiMain || "";
            document.getElementById('edit-ui-sub').value = item.uiSub || "";
            
            let iType = item.uiIconType || 'pre'; let iVal = item.uiIconVal || 'lock';
            selectIcon(iType, iVal);
            document.getElementById('ui-config-modal').classList.remove('hidden');
        }

        function confirmUIModal() { document.getElementById('ui-config-modal').classList.add('hidden'); }

        function selectIcon(type, val) {
            tempUiIconType = type; tempUiIconVal = val;
            
            if (type === 'pre') {
                const path = svgPaths[val] || svgPaths.lock;
                document.getElementById('custom-svg-preview').innerHTML = `<svg class="ui-icon" style="margin:0; width: 24px; height: 24px;" viewBox="0 0 512 512" fill="#ffffff">${path}</svg>`;
            } else if (type === 'emoji') { 
                document.getElementById('custom-svg-preview').innerHTML = `<div style="font-size: 24px;">${val}</div>`; 
            } else if (type === 'custom') { 
                document.getElementById('custom-svg-preview').innerHTML = val;
                const svgEl = document.getElementById('custom-svg-preview').querySelector('svg');
                if(svgEl) { svgEl.style.width = '24px'; svgEl.style.height = '24px'; if(!svgEl.getAttribute('fill')) svgEl.setAttribute('fill', '#ffffff'); }
            } else if (type === 'fontawesome') {
                const cleanVal = val.replace(/\.svg$/, '');
                document.getElementById('custom-svg-preview').innerHTML = `<img src="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@master/svgs/${cleanVal}.svg" style="width:24px;height:24px; filter:invert(1);" />`;
            }
        }

        function openFaIconModal() {
            document.getElementById('fa-icon-modal').classList.remove('hidden');
            document.getElementById('fa-icon-search').value = '';
            renderFaIcons();
        }

        function closeFaIconModal() { document.getElementById('fa-icon-modal').classList.add('hidden'); }
        


        function filterFaIcons() { renderFaIcons(document.getElementById('fa-icon-search').value.toLowerCase()); }

        function renderFaIcons(filter = '') {
            const grid = document.getElementById('fa-icon-grid');
            if (typeof FONT_AWESOME_ICONS === 'undefined') { grid.innerHTML = '<p style="color:#aaa; padding:10px;">Erro ao carregar lista de ícones.</p>'; return; }
            grid.innerHTML = '';
            let count = 0;
            for (let i = 0; i < FONT_AWESOME_ICONS.length; i++) {
                const path = FONT_AWESOME_ICONS[i];
                const name = path.split('/').pop();
                if (filter && !name.includes(filter)) continue;
                if (count > 200) break;
                count++;
                
                const btn = document.createElement('button');
                btn.className = 'icon-picker-btn';
                btn.style.width = '100%'; btn.style.height = '40px'; btn.style.padding = '5px'; btn.style.margin = '0';
                btn.title = name;
                btn.onclick = () => { selectIcon('fontawesome', path); closeFaIconModal(); };
                const cleanPath = path.replace(/\.svg$/, '');
                btn.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@master/svgs/${cleanPath}.svg" style="width:24px; height:24px; filter:invert(1);" loading="lazy" />`;
                grid.appendChild(btn);
            }
            if(count === 0) grid.innerHTML = '<p style="color:#aaa; padding:10px; grid-column: 1/-1;">Nenhum ícone encontrado.</p>';
        }

        function handleSvgUpload(e) {
            const file = e.target.files[0]; if(!file) return;
            if(file.size > 15360) { customAlert("O arquivo é muito grande. Use um arquivo simples (até 15KB) para manter a URL funcional.", "Atenção"); return; }
            const reader = new FileReader();
            reader.onload = function(evt) {
                if(file.type === "image/png" || file.name.toLowerCase().endsWith(".png")) {
                    selectIcon('custom', `<img src="${evt.target.result}" style="width:100%;height:100%;object-fit:contain;" />`);
                } else {
                    let rawSvg = evt.target.result;
                    rawSvg = rawSvg.replace(/\r?\n|\r/g, "").replace(/>\s+</g, "><").trim();
                    if(!rawSvg.startsWith('<svg')) { customAlert("Arquivo inválido. Suba um SVG ou PNG.", "Erro"); return; }
                    selectIcon('custom', rawSvg);
                }
            };
            if(file.type === "image/png" || file.name.toLowerCase().endsWith(".png")) reader.readAsDataURL(file); else reader.readAsText(file);
            e.target.value = '';
        }

        function createGroupInModal(listName, passwordsArr) {
            const container = document.getElementById('edit-modal-list'); const groupDiv = document.createElement('div');
            groupDiv.className = 'list-group'; groupDiv.dataset.list = listName; const safeListName = listName.replace(/'/g, "\\'");
            groupDiv.innerHTML = `
                <div class="list-group-header">
                    <span class="list-group-title" style="display:flex; align-items:center;">
                        <input type="checkbox" onchange="toggleGroupCheckboxes(this, '${safeListName}')" style="margin-right:8px; display:none;" class="master-pwd-checkbox">
                        <svg class="ui-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg> 
                        Grupo: <input type="text" value="${listName}" class="admin-input list-name-input" style="width:auto; padding: 4px; display:inline-block; margin-left:5px;"> 
                        <span class="group-pwd-count-text" style="font-size: 14px; color: #555; font-weight: normal; margin-left: 5px;">| ${passwordsArr.length} senha(s)</span>
                    </span>
                    <div style="display: flex; gap: 5px;">
                        <button onclick="addEditRow('', '', '${safeListName}', null, false)" class="btn-action btn-custom-list" style="margin: 0; font-weight: bold; padding: 6px 12px;">+ Senha</button>
                        <button onclick="toggleGroupSelectMode('${safeListName}', this)" class="btn-action btn-group-select" style="background:#333; color:#fff; font-weight: bold;">Selecionar</button>
                        <button onclick="deleteGroupSelectedOrAll('${safeListName}')" class="btn-action" style="background: #2a2a2a; color: #e53935; padding: 6px 10px; border-radius: 8px; margin: 0;" title="Excluir Seleção ou Todas as Senhas"><svg class="ui-icon" style="margin: 0; width: 14px; height: 14px;" viewBox="0 0 448 512" fill="currentColor">${svgPaths.trash}</svg></button>
                        <button onclick="toggleGroupReorderMode('${safeListName}', this)" class="btn-action btn-group-reorder" style="background:#333; color:#fff; font-weight: bold;">Editar Ordem</button>
                        <button onclick="checkGroupUsage('${safeListName}')" class="btn-action" style="background:#333; color:#fff; font-weight: bold;" title="Ver em quais listas as senhas deste grupo estão">Listas</button>
                        <button onclick="batchRename('${safeListName}', false)" class="btn-action" style="background:#333; color:#fff; font-weight: bold;">Renomear em Bloco</button>
                    </div>
                </div>
                <div class="list-rows-container"></div>`;
            container.appendChild(groupDiv); const rowsContainer = groupDiv.querySelector('.list-rows-container');
            passwordsArr.forEach(p => addEditRow(p.name, p.value, listName, rowsContainer, false, p.id));
        }

        function toggleGroupCheckboxes(masterCb, listName) { const group = document.querySelector(`.list-group[data-list="${listName}"]`); if(group) group.querySelectorAll('.pwd-checkbox').forEach(cb => cb.checked = masterCb.checked); }

        function addEditRow(nameVal = "", pwdVal = "", listName = "Avulsa", targetContainer = null, isCustomListMode = false, pwdId = null) {
            const realId = pwdId || genId();
            let isSelecting = false;
            let isReordering = false;
            if(!targetContainer) {
                let group = isCustomListMode ? document.getElementById('custom-list-modal-list') : document.querySelector(`.list-group[data-list="${listName}"]`);
                if(!isCustomListMode && !group) { createGroupInModal(listName, []); group = document.querySelector(`.list-group[data-list="${listName}"]`); }
                targetContainer = isCustomListMode ? group : group.querySelector('.list-rows-container');
                if(!isCustomListMode && group) {
                    const selectBtn = group.querySelector('.btn-group-select');
                    if (selectBtn && selectBtn.textContent.includes('Cancelar')) isSelecting = true;
                    const reorderBtn = group.querySelector('.btn-group-reorder');
                    if (reorderBtn && reorderBtn.textContent.includes('Cancelar')) isReordering = true;
                }
            } else {
                const group = targetContainer.closest('.list-group');
                if(group && !isCustomListMode) {
                    const selectBtn = group.querySelector('.btn-group-select');
                    if (selectBtn && selectBtn.textContent.includes('Cancelar')) isSelecting = true;
                    const reorderBtn = group.querySelector('.btn-group-reorder');
                    if (reorderBtn && reorderBtn.textContent.includes('Cancelar')) isReordering = true;
                }
            }
            
            const row = document.createElement('div'); row.className = 'edit-pw-row'; row.dataset.id = realId;
            row.style.display = 'flex'; row.style.gap = '6px'; row.style.marginBottom = '8px'; row.style.alignItems = 'center';
            
            const isRowDraggable = (isCustomListMode && isReorderingCustomListPwds) || (!isCustomListMode && isReordering);
            let dragHandleHtml = `<svg class="ui-icon drag-handle" style="margin:0; width:16px; height:16px; color:#777; cursor: grab;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
            
            if (isRowDraggable) {
                row.setAttribute('draggable', 'true');
                row.addEventListener('dragstart', handleDragStartPwd);
                row.addEventListener('dragover', handleDragOverPwd);
                row.addEventListener('dragleave', handleDragLeavePwd);
                row.addEventListener('drop', handleDropPwd);
                row.addEventListener('dragend', handleDragEndPwd);
            }

            let cbHtml = '';
            if (isRowDraggable) {
                cbHtml = dragHandleHtml;
            } else {
                cbHtml = `<input type="checkbox" class="pwd-checkbox" value="${realId}" style="margin: 0 5px; display: ${isSelecting ? 'inline-block' : 'none'};">`;
            }
            
            let trashBtnHtml = '';
            if (isCustomListMode) {
                trashBtnHtml = `<button type="button" class="btn-random" onclick="this.parentElement.remove()" title="Remover" style="background: rgba(229, 57, 53, 0.2); color: #e53935; padding: 0 10px; ${isRowDraggable ? 'pointer-events:none; opacity:0.5;' : ''}"><svg class="ui-icon" style="margin:0; width:16px; height:16px;" viewBox="0 0 448 512" fill="currentColor">${svgPaths.trash}</svg></button>`;
            }

            row.innerHTML = `
                ${cbHtml}
                <input type="text" class="admin-input edit-pw-name" placeholder="Nome" value="${nameVal}" style="flex: 1; margin: 0;" ${isRowDraggable ? 'disabled' : ''}>
                <input type="text" class="admin-input edit-pw-value" placeholder="Senha" value="${pwdVal}" style="flex: 1; margin: 0;" ${isRowDraggable ? 'disabled' : ''}>
                <button type="button" class="btn-random" onclick="this.previousElementSibling.value = generateUniquePassword(getGlobalUsedPasswords(${isCustomListMode ? 'null' : 'currentEditId'}))" title="Aleatória" ${isRowDraggable ? 'disabled style="opacity:0.5;"' : ''}><svg class="ui-icon" viewBox="0 0 512 512" fill="currentColor"><path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"/></svg></button>
                <button type="button" class="btn-random" onclick="copyText(this.parentElement.querySelector('.edit-pw-value').value, this)" title="Copiar" style="background: rgba(29, 126, 217, 0.2); color: #1d7ed9; padding: 0 10px; ${isRowDraggable ? 'pointer-events:none; opacity:0.5;' : ''}"><svg class="ui-icon" style="margin:0; width:16px; height:16px;" viewBox="0 0 448 512" fill="currentColor">${svgPaths.copy}</svg></button>
                ${trashBtnHtml}`;
            targetContainer.appendChild(row);
            
            if (!isCustomListMode) {
                const group = targetContainer.closest('.list-group');
                if (group) {
                    const countEl = group.querySelector('.group-pwd-count-text');
                    const currentCount = group.querySelectorAll('.edit-pw-row').length;
                    if (countEl) countEl.innerText = `| ${currentCount} senha(s)`;
                }
            }
        }

        function addNewGroupToModal() {
            const name = document.getElementById('new-group-name').value || "Novo Grupo"; let qty = parseInt(document.getElementById('new-group-qty').value); if(isNaN(qty) || qty < 1) qty = 1; if(qty > 200) qty = 200;
            let arr = []; const globalUsed = getGlobalUsedPasswords(currentEditId);
            for(let i=0; i<qty; i++) arr.push({id: genId(), name: `${name} - ${String(i+1).padStart(2,'0')}`, value: generateUniquePassword(globalUsed)});
            createGroupInModal(name, arr); document.getElementById('new-group-name').value = ''; document.getElementById('new-group-qty').value = '';
        }

        function batchRename(oldListName, isCustomListMode) {
            customPrompt(`Digite o novo nome base para as senhas (Lista: ${oldListName}):`, "", (base) => {
                if(!base || base.trim() === '') return;
                const container = isCustomListMode ? document.getElementById('custom-list-modal-list') : document.querySelector(`.list-group[data-list="${oldListName}"]`);
                if(!container) return; container.querySelectorAll('.edit-pw-name').forEach((inp, idx) => inp.value = `${base} - ${String(idx + 1).padStart(2, '0')}`);
            });
        }

        function saveEdits(keepLink = false) {
            const item = secureLinks.find(l => l.id === currentEditId); if (!item) return;
            const doSave = () => {
                const newName = document.getElementById('edit-link-name').value || "Acesso sem nome";
                const newUiTitle = document.getElementById('edit-ui-title').value; 
                const newUiMain = document.getElementById('edit-ui-main').value;
                const newUiSub = document.getElementById('edit-ui-sub').value; 
                const newUiIconType = tempUiIconType; 
                const newUiIconVal = tempUiIconVal;

                let newPasswords = []; let globalUsed = getGlobalUsedPasswords(currentEditId); let currentBatch = new Set(); let errDup = false;
                document.querySelectorAll('.list-group').forEach(group => {
                    const lName = group.querySelector('.list-name-input').value || "Avulsa";
                    group.querySelectorAll('.edit-pw-row').forEach(row => {
                        const id = row.dataset.id, n = row.querySelector('.edit-pw-name').value || "Sem Nome", v = row.querySelector('.edit-pw-value').value.trim();
                        if (v !== '') { if (globalUsed.has(v) || currentBatch.has(v)) errDup = true; currentBatch.add(v); newPasswords.push({ id: id, name: n, value: v, listName: lName }); }
                    });
                });
                if (errDup) { customAlert("Senhas duplicadas detectadas.", "Erro"); return; }
                if (newPasswords.length === 0) { customAlert("Adicione pelo menos uma senha.", "Erro"); return; }

                // Verificação se houve mudança nos dados que compõem a URL
                let cryptoOrUiChanged = false;
                if (item.passwords.length !== newPasswords.length) {
                    cryptoOrUiChanged = true;
                } else {
                    for (let i = 0; i < newPasswords.length; i++) {
                        const newP = newPasswords[i];
                        const oldP = item.passwords.find(p => p.id === newP.id);
                        if (!oldP || oldP.value !== newP.value) {
                            cryptoOrUiChanged = true;
                            break;
                        }
                    }
                }

                if (item.uiTitle !== newUiTitle ||
                    item.uiMain !== newUiMain ||
                    item.uiSub !== newUiSub ||
                    item.uiIconType !== newUiIconType ||
                    item.uiIconVal !== newUiIconVal) {
                    cryptoOrUiChanged = true;
                }

                item.name = newName;
                item.uiTitle = newUiTitle;
                item.uiMain = newUiMain;
                item.uiSub = newUiSub;
                item.uiIconType = newUiIconType;
                item.uiIconVal = newUiIconVal;
                item.passwords = newPasswords;

                if (cryptoOrUiChanged) {
                    regenerateLinkCryptography(item, keepLink);
                }

                localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
                renderAdminTable(); closeEditModal();
                
                if (cryptoOrUiChanged) {
                    customAlert(keepLink ? "✔️ Alterações salvas! O link continua o mesmo." : "✔️ Alterações salvas com sucesso! O link foi redefinido.", "Sucesso");
                } else {
                    customAlert("✔️ Alterações salvas com sucesso! (Nenhuma alteração nos dados da URL, o link permanece o mesmo).", "Sucesso");
                }
            };

            // Verificação prévia para exibição de confirmação
            let willChangeCryptoOrUi = false;
            const newUiTitle = document.getElementById('edit-ui-title').value;
            const newUiMain = document.getElementById('edit-ui-main').value;
            const newUiSub = document.getElementById('edit-ui-sub').value;
            const newUiIconType = tempUiIconType;
            const newUiIconVal = tempUiIconVal;

            let checkPasswords = [];
            document.querySelectorAll('.list-group').forEach(group => {
                group.querySelectorAll('.edit-pw-row').forEach(row => {
                    const id = row.dataset.id, v = row.querySelector('.edit-pw-value').value.trim();
                    if (v !== '') { checkPasswords.push({ id: id, value: v }); }
                });
            });

            if (item.passwords.length !== checkPasswords.length) {
                willChangeCryptoOrUi = true;
            } else {
                for (let i = 0; i < checkPasswords.length; i++) {
                    const newP = checkPasswords[i];
                    const oldP = item.passwords.find(p => p.id === newP.id);
                    if (!oldP || oldP.value !== newP.value) {
                        willChangeCryptoOrUi = true;
                        break;
                    }
                }
            }

            if (item.uiTitle !== newUiTitle ||
                item.uiMain !== newUiMain ||
                item.uiSub !== newUiSub ||
                item.uiIconType !== newUiIconType ||
                item.uiIconVal !== newUiIconVal) {
                willChangeCryptoOrUi = true;
            }

            if (!keepLink && willChangeCryptoOrUi) {
                customConfirm("Ao redefinir, uma nova URL será gerada. Links antigos pararão de funcionar imediatamente assim que o código do GitHub for atualizado. Deseja continuar?", () => { doSave(); }, "Redefinir Link", "Confirmar");
            } else {
                doSave();
            }
        }

        function closeEditModal() { document.getElementById('edit-modal').classList.add('hidden'); currentEditId = null; }
        function copyText(txt, btn) { navigator.clipboard.writeText(txt).then(() => { const orig = btn.innerHTML; btn.innerHTML = `<svg class="ui-icon" style="margin:0;" viewBox="0 0 512 512" fill="currentColor"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`; setTimeout(() => btn.innerHTML = orig, 1500); }); }

        let pendingCustomListPwdIds = new Set();
        let pendingPreviewOpen = false;
        
        function updatePendingCustomListCounter() { 
            const countEl = document.getElementById('pending-count-text');
            if (countEl) countEl.innerText = `${pendingCustomListPwdIds.size} senhas acumuladas nesta lista.`; 
            if (pendingPreviewOpen) renderPendingPreview();
        }

        function togglePendingPreview() {
            pendingPreviewOpen = !pendingPreviewOpen;
            const container = document.getElementById('pending-passwords-preview');
            const arrow = document.getElementById('pending-preview-arrow');
            if (pendingPreviewOpen) {
                container.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
                renderPendingPreview();
            } else {
                container.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        function renderPendingPreview() {
            const container = document.getElementById('pending-passwords-preview');
            container.innerHTML = '';
            if (pendingCustomListPwdIds.size === 0) {
                container.innerHTML = '<p style="color:#777; font-size:12px; text-align:center;">Lista vazia.</p>';
                return;
            }
            pendingCustomListPwdIds.forEach(idStr => {
                const id = parseInt(idStr) || idStr;
                const found = findPasswordAndLink(id);
                if (found) {
                    const div = document.createElement('div');
                    div.style.display = 'flex'; div.style.alignItems = 'center'; div.style.marginBottom = '8px';
                    div.innerHTML = `<input type="checkbox" checked onchange="removePendingPreview('${id}')" style="margin-right: 10px; width: 14px; height: 14px;"><span style="font-size: 13px; color: #eee; flex: 1;">${found.pwd.name}</span><span style="font-size: 13px; color: #1d7ed9; font-family: monospace;">${found.pwd.value}</span>`;
                    container.appendChild(div);
                }
            });
        }
        
        function removePendingPreview(id) {
            pendingCustomListPwdIds.delete(id.toString());
            updatePendingCustomListCounter();
            const sourceCb = document.querySelector(`.source-pwd-checkbox[value="${id}"]`);
            if (sourceCb) sourceCb.checked = false;
        }

        function addSelectionToPending() {
            let added = 0; let removed = 0;
            document.querySelectorAll('.source-pwd-checkbox').forEach(cb => {
                if (cb.checked) { if (!pendingCustomListPwdIds.has(cb.value)) { pendingCustomListPwdIds.add(cb.value); added++; } } 
                else { if (pendingCustomListPwdIds.has(cb.value)) { pendingCustomListPwdIds.delete(cb.value); removed++; } }
            });
            updatePendingCustomListCounter();
            customAlert(`Seleção atualizada na memória! (${added} adicionadas, ${removed} removidas).`, "Seleção Adicionada");
            document.getElementById('new-custom-list-source-input').value = '';
            document.getElementById('new-custom-list-source').value = '';
            document.getElementById('source-passwords-container').style.display = 'none';
            document.getElementById('source-passwords-container').innerHTML = '';
        }

        function openCreateListModal() {
            pendingCustomListPwdIds.clear(); updatePendingCustomListCounter();
            document.getElementById('new-custom-list-name').value = ''; 
            const suffixToggle = document.getElementById('avoid-dup-toggle'); if(suffixToggle) suffixToggle.checked = false;
            const suffixInput = document.getElementById('avoid-dup-suffix'); if(suffixInput) { suffixInput.value = ''; suffixInput.disabled = true; }
            const searchInput = document.getElementById('new-custom-list-source-input'); if(searchInput) searchInput.value = '';
            const hiddenInput = document.getElementById('new-custom-list-source'); if(hiddenInput) hiddenInput.value = '';
            setupSourceAutocomplete();
            document.getElementById('source-passwords-container').style.display = 'none'; document.getElementById('source-passwords-container').innerHTML = ''; 
            document.getElementById('create-list-modal').classList.remove('hidden');
        }

        function setupSourceAutocomplete() {
            const input = document.getElementById('new-custom-list-source-input');
            const hidden = document.getElementById('new-custom-list-source');
            const tray = document.getElementById('tray-new-custom-list-source');
            if(!input || !tray) return;

            let options = [];
            secureLinks.forEach(link => { 
                link.passwords.forEach(p => { 
                    if (p.listName !== "Senha Única") {
                        options.push({ type: 'group', linkId: link.id, listName: p.listName, linkName: link.name, label: link.name + ' (Grupo: ' + p.listName + ')' });
                    } else {
                        options.push({ type: 'single', linkId: link.id, pwdId: p.id, linkName: link.name, label: link.name + ' (' + p.name + ')' });
                    }
                }); 
            });
            // remove duplicate groups
            const uniqueOptions = [];
            const seenGroups = new Set();
            options.forEach(opt => {
                if(opt.type === 'group') {
                    const key = opt.linkId + '|' + opt.listName;
                    if(!seenGroups.has(key)) { seenGroups.add(key); uniqueOptions.push(opt); }
                } else {
                    uniqueOptions.push(opt);
                }
            });

            const renderOptions = (filterText) => {
                tray.innerHTML = '';
                const filtered = uniqueOptions.filter(o => o.label.toLowerCase().includes(filterText.toLowerCase()));
                if(filtered.length === 0) {
                    tray.innerHTML = '<div style="padding: 10px; color: #777;">Nenhuma fonte encontrada.</div>';
                } else {
                    filtered.forEach(o => {
                        const div = document.createElement('div');
                        div.className = 'custom-select-option';
                        const icon = o.type === 'group' ? '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:currentColor;"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>' : '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:currentColor;"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>';
                        div.innerHTML = icon + o.label;
                        div.onclick = (e) => {
                            e.stopPropagation();
                            input.value = o.label;
                            hidden.value = o.type === 'group' ? 'group|' + o.linkId + '|' + o.listName : 'single|' + o.linkId + '|' + o.pwdId;
                            tray.style.display = 'none';
                            renderSourcePasswords();
                        };
                        tray.appendChild(div);
                    });
                }
            };

            input.onfocus = () => { renderOptions(input.value); tray.style.display = 'block'; };
            input.oninput = () => { renderOptions(input.value); tray.style.display = 'block'; };
            document.addEventListener('click', (e) => { if(!e.target.closest('#wrapper-new-custom-list-source')) { tray.style.display = 'none'; } });
        }

        function closeCreateListModal() { document.getElementById('create-list-modal').classList.add('hidden'); }

        function renderSourcePasswords() {
            // Auto-save any currently checked boxes before destroying the view
            document.querySelectorAll('.source-pwd-checkbox').forEach(cb => {
                if (cb.checked) pendingCustomListPwdIds.add(cb.value); else pendingCustomListPwdIds.delete(cb.value);
            });
            updatePendingCustomListCounter();

            const val = document.getElementById('new-custom-list-source').value; const container = document.getElementById('source-passwords-container'); container.innerHTML = '';
            if (!val) { container.style.display = 'none'; return; }
            container.style.display = 'block'; let passwordsToShow = [];
            
            const avoidDup = document.getElementById('avoid-dup-toggle') && document.getElementById('avoid-dup-toggle').checked;
            const suffix = document.getElementById('avoid-dup-suffix') ? document.getElementById('avoid-dup-suffix').value : '';
            let usedIdsInSuffix = new Set();
            if (avoidDup && suffix) {
                secureCustomLists.forEach(l => {
                    const listSuffix = l.suffix || '';
                    if ((listSuffix && listSuffix.toLowerCase() === suffix.toLowerCase()) || (!listSuffix && l.name.toLowerCase().endsWith(suffix.toLowerCase()))) {
                        l.pwdIds.forEach(id => usedIdsInSuffix.add(id.toString()));
                    }
                });
            }

            if (val.startsWith('single|')) {
                const parts = val.split('|'); const linkId = parseInt(parts[1]); const pwdId = parseInt(parts[2]);
                const link = secureLinks.find(l => l.id === linkId);
                if (link) {
                    const pwd = link.passwords.find(p => p.id === pwdId);
                    if(pwd && !usedIdsInSuffix.has(pwd.id.toString())) passwordsToShow.push(pwd);
                }
            } else if (val.startsWith('group|')) {
                const parts = val.split('|'); const linkId = parseInt(parts[1]); const listName = parts[2];
                const link = secureLinks.find(l => l.id === linkId); 
                if (link) { 
                    link.passwords.forEach(p => { 
                        if (p.listName === listName && !usedIdsInSuffix.has(p.id.toString())) passwordsToShow.push(p); 
                    }); 
                }
            }
            if (passwordsToShow.length === 0) { container.innerHTML = '<p style="color: #777; font-size: 12px; text-align: center;">Nenhuma senha encontrada.</p>'; return; }
            passwordsToShow.forEach(p => {
                const isChecked = pendingCustomListPwdIds.has(p.id.toString()) ? 'checked' : '';
                const div = document.createElement('div'); div.style.display = 'flex'; div.style.alignItems = 'center'; div.style.marginBottom = '8px';
                div.innerHTML = `<input type="checkbox" class="source-pwd-checkbox" value="${p.id}" style="margin-right: 10px;" ${isChecked}><span style="font-size: 13px; color: #eee; flex: 1;">${p.name}</span><span style="font-size: 13px; color: #1d7ed9; font-family: monospace;">${p.value}</span>`;
                container.appendChild(div);
            });
        }

        function saveNewCustomList() {
            // Auto-save visible checkboxes just in case
            document.querySelectorAll('.source-pwd-checkbox').forEach(cb => {
                if (cb.checked) pendingCustomListPwdIds.add(cb.value); else pendingCustomListPwdIds.delete(cb.value);
            });

            const listName = document.getElementById('new-custom-list-name').value.trim(); if (!listName) { customAlert("Digite o nome da Lista."); return; }
            if (pendingCustomListPwdIds.size === 0) { customAlert("Você precisa adicionar pelo menos uma senha na seleção."); return; }
            const suffix = document.getElementById('avoid-dup-suffix') ? document.getElementById('avoid-dup-suffix').value : '';
            
            let list = secureCustomLists.find(p => p.name.toLowerCase() === listName.toLowerCase()); if (!list) { list = { id: genListId(), name: listName, suffix: suffix, pwdIds: [] }; secureCustomLists.push(list); } else { if (suffix) list.suffix = suffix; }
            
            let added = 0; pendingCustomListPwdIds.forEach(id => { if (!list.pwdIds.includes(id)) { list.pwdIds.push(id); added++; } });
            
            localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists)); renderCustomListsTable(); closeCreateListModal(); customAlert(`✔️ Lista Final salva! ${added} nova(s) senha(s) adicionada(s) à lista "${listName}".`, "Sucesso");
        }

        let isReorderingCustomLists = false;
        let isSelectingCustomLists = false;
        let draggedCustomListRow = null;
        let hasReorderedCustomLists = false;

        function toggleSelectCustomListsMode(forceCancel = false) {
            if (isSelectingCustomLists || forceCancel) {
                isSelectingCustomLists = false;
                document.getElementById('btn-select-custom-lists').style.background = '#333';
                document.getElementById('btn-select-custom-lists').innerHTML = `Selecionar`;
                renderCustomListsTable();
            } else {
                if (isReorderingCustomLists) toggleReorderCustomListsMode(true);
                isSelectingCustomLists = true;
                if (!customListsExpanded) toggleExpandCustomLists(true);
                document.getElementById('btn-select-custom-lists').style.background = '#e53935';
                document.getElementById('btn-select-custom-lists').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
                renderCustomListsTable();
            }
        }

        function toggleReorderCustomListsMode(forceCancel = false) {
            if (isReorderingCustomLists || forceCancel) {
                isReorderingCustomLists = false;
                hasReorderedCustomLists = false;
                document.getElementById('btn-create-custom-list').classList.remove('invisible-btn');
                document.getElementById('btn-save-reorder-lists').classList.add('invisible-btn');
                document.getElementById('btn-reorder-custom-lists').style.background = '#333';
                document.getElementById('btn-reorder-custom-lists').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> Editar Ordem`;
                renderCustomListsTable();
            } else {
                if (isSelectingCustomLists) toggleSelectCustomListsMode(true);
                isReorderingCustomLists = true;
                hasReorderedCustomLists = false;
                document.getElementById('btn-create-custom-list').classList.add('invisible-btn');
                document.getElementById('btn-save-reorder-lists').classList.add('invisible-btn');
                document.getElementById('btn-reorder-custom-lists').style.background = '#e53935';
                document.getElementById('btn-reorder-custom-lists').innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
                renderCustomListsTable();
            }
        }

        function handleDragStartList(e) { draggedCustomListRow = e.target.closest('tr'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/html', draggedCustomListRow.innerHTML); setTimeout(() => draggedCustomListRow.classList.add('dragging'), 0); }
        function handleDragOverList(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; const targetRow = e.target.closest('tr'); if(targetRow && targetRow !== draggedCustomListRow && targetRow.parentElement === draggedCustomListRow.parentElement) { const rect = targetRow.getBoundingClientRect(); const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5; draggedCustomListRow.parentElement.insertBefore(draggedCustomListRow, next && targetRow.nextSibling || targetRow); document.getElementById('btn-save-reorder-lists').classList.remove('hidden'); } }
        function handleDragLeaveList(e) { const targetRow = e.target.closest('tr'); if(targetRow) targetRow.classList.remove('drag-over'); }
        function handleDropList(e) { e.preventDefault(); const targetRow = e.target.closest('tr'); if(targetRow) targetRow.classList.remove('drag-over'); }
        function handleDragEndList(e) { draggedCustomListRow.classList.remove('dragging'); draggedCustomListRow = null; }

        function saveCustomListsOrder() {
            const tbody = document.getElementById('custom-lists-tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const newLists = [];
            rows.forEach(tr => {
                const id = tr.dataset.id;
                const found = secureCustomLists.find(l => l.id === id);
                if(found) newLists.push(found);
            });
            secureCustomLists = newLists;
            localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
            toggleReorderCustomListsMode(true);
            customAlert("Ordem das listas salva com sucesso!", "Sucesso");
        }

        let customListsExpanded = false;
        window.toggleExpandCustomLists = function(forceExpand = null) {
            if (forceExpand !== null) customListsExpanded = forceExpand;
            else customListsExpanded = !customListsExpanded;
            
            if (!customListsExpanded && isSelectingCustomLists) {
                toggleSelectCustomListsMode(true);
            }
            
            const btn = document.getElementById('btn-expand-custom-lists');
            if (btn) {
                if (customListsExpanded) {
                    btn.innerHTML = `Recolher <svg class="custom-select-arrow" id="expand-lists-arrow" viewBox="0 0 384 512" fill="currentColor" style="position:static; transform:rotate(180deg); margin: 0; transition: transform 0.3s ease; width: 12px; height: 12px;"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>`;
                } else {
                    btn.innerHTML = `Expandir <svg class="custom-select-arrow" id="expand-lists-arrow" viewBox="0 0 384 512" fill="currentColor" style="position:static; transform:translateY(0); margin: 0; transition: transform 0.3s ease; width: 12px; height: 12px;"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/></svg>`;
                }
            }
            renderCustomListsTable();
        };

        function renderCustomListsTable() {
            const tbody = document.getElementById('custom-lists-tbody'); tbody.innerHTML = '';
            const countEl = document.getElementById('custom-lists-count');
            if (countEl) countEl.innerText = '| ' + secureCustomLists.length;
            if (secureCustomLists.length === 0) { tbody.innerHTML = `<tr><td colspan="2" style="color:#555; text-align:center; padding:10px;">Nenhuma lista criada.</td></tr>`; return; }
            
            const expandContainer = document.getElementById('expand-custom-lists-container');
            if (secureCustomLists.length > 3 && !isReorderingCustomLists) {
                if(expandContainer) expandContainer.classList.remove('hidden');
            } else {
                if(expandContainer) expandContainer.classList.add('hidden');
            }

            secureCustomLists.forEach((list, index) => {
                const tr = document.createElement('tr');
                tr.dataset.id = list.id;
                
                if (!customListsExpanded && index >= 3 && !isReorderingCustomLists) {
                    tr.style.display = 'none';
                }
                
                let checkboxHTML = `<input type="checkbox" class="list-checkbox ${isSelectingCustomLists ? '' : 'hidden'}" data-id="${list.id}" style="margin:0;" onclick="event.stopPropagation()">`;
                let firstCell = `<td style="font-weight:bold; color:#1d7ed9; display: flex; align-items: center; gap: 10px;">${checkboxHTML}${list.name}${list.suffix || ''}</td>`;
                let lastCell = `
                    <td style="text-align: right; white-space: nowrap;">
                        <button onclick="openCustomListModal('${list.id}')" class="btn-action btn-custom-list">Gerenciar</button>
                    </td>`;

                if (isReorderingCustomLists) {
                    firstCell = `<td style="font-weight:bold; color:#1d7ed9; display: flex; align-items: center; gap: 10px;"><svg class="ui-icon drag-handle" style="margin:0; width:16px; height:16px; color:#777;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>${checkboxHTML}${list.name}${list.suffix || ''}</td>`;
                    lastCell = `<td style="text-align: right; white-space: nowrap;"><button class="btn-action btn-custom-list" style="opacity: 0.5; pointer-events: none;">Gerenciar</button></td>`;
                    tr.setAttribute('draggable', 'true');
                    tr.addEventListener('dragstart', handleDragStartList);
                    tr.addEventListener('dragover', handleDragOverList);
                    tr.addEventListener('dragleave', handleDragLeaveList);
                    tr.addEventListener('drop', handleDropList);
                    tr.addEventListener('dragend', handleDragEndList);
                }

                tr.innerHTML = firstCell + lastCell;
                tbody.appendChild(tr);
            });
        }

        function addSelectedToCustomList() {
            const listId = parseInt(document.getElementById('add-to-custom-list-id').value);
            if(isNaN(listId)) { customAlert("Selecione uma Lista Personalizada.", "Atenção"); return; }
            const selected = Array.from(document.querySelectorAll('.pwd-checkbox:checked')).map(cb => cb.value); if(selected.length === 0) { customAlert("Selecione senhas usando as caixinhas na lista abaixo.", "Atenção"); return; }
            let list = secureCustomLists.find(p => p.id === listId); if(!list) return;
            let added = 0; selected.forEach(id => { if(!list.pwdIds.includes(id)) { list.pwdIds.push(id); added++; } });
            localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists)); renderCustomListsTable(); document.querySelectorAll('.pwd-checkbox').forEach(cb => cb.checked = false); document.getElementById('add-to-custom-list-input').value = ''; document.getElementById('add-to-custom-list-id').value = ''; customAlert(`✔️ ${added} senha(s) adicionadas à Lista "${list.name}${list.suffix || ''}"!`, "Sucesso");
        }

        function findPasswordAndLink(pwdId) { for(let l of secureLinks) { const p = l.passwords.find(pw => pw.id === pwdId); if(p) return { link: l, pwd: p }; } return null; }

        function openCustomListModal(listId) {
            currentCustomListId = listId; const list = secureCustomLists.find(p => p.id === listId); if(!list) return;
            document.getElementById('custom-list-name-input').value = list.name; document.getElementById('custom-list-suffix-input').value = list.suffix || ''; const listContainer = document.getElementById('custom-list-modal-list'); listContainer.innerHTML = '';
            list.pwdIds.forEach(pwdId => { const found = findPasswordAndLink(pwdId); if(found) addEditRow(found.pwd.name, found.pwd.value, 'Avulsa', listContainer, true, pwdId); });
            
            document.getElementById('add-to-custom-list-section').style.display = 'none';
            setupEditCustomListSourceAutocomplete();
            document.getElementById('custom-list-modal').classList.remove('hidden');
        }

        function batchRenameCustomList() { batchRename("Lista Personalizada", true); }

        function copyCustomListFormatted() {
            const list = secureCustomLists.find(p => p.id === currentCustomListId); if(!list) return;
            const listName = document.getElementById('custom-list-name-input').value;
            const listSuffix = document.getElementById('custom-list-suffix-input').value;
            let txt = `${listName}${listSuffix}:\n\n`;
            document.querySelectorAll('#custom-list-modal-list .edit-pw-row').forEach(r => { const n = r.querySelector('.edit-pw-name').value; const v = r.querySelector('.edit-pw-value').value; txt += `- ${n}: ${v}\n`; });
            navigator.clipboard.writeText(txt).then(() => customAlert('Lista copiada para a área de transferência!', "Copiado"));
        }

        let isReorderingCustomListPwds = false;
        let draggedCustomListPwdRow = null;

        function toggleReorderCustomListPwds(forceCancel = false) {
            const btn = document.getElementById('btn-reorder-custom-pwds');
            if (isReorderingCustomListPwds || forceCancel) {
                isReorderingCustomListPwds = false;
                btn.style.background = '#333';
                btn.innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 448 512" fill="currentColor"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> Editar Ordem`;
            } else {
                isReorderingCustomListPwds = true;
                btn.style.background = '#e53935';
                btn.innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Concluir Edição`;
            }
            
            const list = secureCustomLists.find(p => p.id === currentCustomListId);
            if (!list) return;
            saveCustomListPwdOrderFromDOM();
            
            const listContainer = document.getElementById('custom-list-modal-list'); 
            listContainer.innerHTML = '';
            list.pwdIds.forEach(pwdId => { const found = findPasswordAndLink(pwdId); if(found) { addEditRow(found.pwd.name, found.pwd.value, "Lista Personalizada", listContainer, true, pwdId); } });
        }
        
        function saveCustomListPwdOrderFromDOM() {
            if (!currentCustomListId) return;
            const list = secureCustomLists.find(p => p.id === currentCustomListId);
            if (!list) return;
            const rows = document.querySelectorAll('#custom-list-modal-list .edit-pw-row');
            let newIds = [];
            rows.forEach(r => newIds.push(r.dataset.id));
            if (newIds.length > 0) list.pwdIds = newIds;
        }

        function handleDragStartPwd(e) { draggedCustomListPwdRow = e.target.closest('.edit-pw-row'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/html', draggedCustomListPwdRow.innerHTML); setTimeout(() => draggedCustomListPwdRow.classList.add('dragging'), 0); }
        function handleDragOverPwd(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; const targetRow = e.target.closest('.edit-pw-row'); if(targetRow && targetRow !== draggedCustomListPwdRow && targetRow.parentElement === draggedCustomListPwdRow.parentElement) { const rect = targetRow.getBoundingClientRect(); const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5; draggedCustomListPwdRow.parentElement.insertBefore(draggedCustomListPwdRow, next && targetRow.nextSibling || targetRow); } }
        function handleDragLeavePwd(e) { const targetRow = e.target.closest('.edit-pw-row'); if(targetRow) targetRow.classList.remove('drag-over'); }
        function handleDropPwd(e) { e.preventDefault(); const targetRow = e.target.closest('.edit-pw-row'); if(targetRow) targetRow.classList.remove('drag-over'); saveCustomListPwdOrderFromDOM(); }
        function handleDragEndPwd(e) { draggedCustomListPwdRow.classList.remove('dragging'); draggedCustomListPwdRow = null; }

        function saveCustomListEdits() {
            saveCustomListPwdOrderFromDOM();
            const list = secureCustomLists.find(p => p.id === currentCustomListId); if(!list) return;
            list.name = document.getElementById('custom-list-name-input').value || "Lista sem nome";
            list.suffix = document.getElementById('custom-list-suffix-input').value;
            const rows = document.querySelectorAll('#custom-list-modal-list .edit-pw-row'); let newIds = []; let linksToRegenerate = new Set(); let errDup = false; let currentBatch = new Set(); let globalUsed = getGlobalUsedPasswords();
            
            rows.forEach(r => { const v = r.querySelector('.edit-pw-value').value.trim(); const originalFound = findPasswordAndLink(r.dataset.id); if (v !== '') { if (currentBatch.has(v)) { errDup = true; } if (globalUsed.has(v) && (!originalFound || originalFound.pwd.value !== v)) errDup = true; currentBatch.add(v); } });
            if (errDup) { customAlert("⚠️ ERRO: Senhas duplicadas detectadas. Cada senha deve ser 100% única."); return; }

            rows.forEach(r => {
                const id = r.dataset.id, n = r.querySelector('.edit-pw-name').value || "Sem Nome", v = r.querySelector('.edit-pw-value').value.trim();
                if(v !== '') { newIds.push(id); const found = findPasswordAndLink(id); if(found && (found.pwd.name !== n || found.pwd.value !== v)) { found.pwd.name = n; found.pwd.value = v; linksToRegenerate.add(found.link); } }
            });

            list.pwdIds = newIds; localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
            linksToRegenerate.forEach(linkObj => regenerateLinkCryptography(linkObj, false)); if(linksToRegenerate.size > 0) localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks));
            renderCustomListsTable(); renderAdminTable(); closeCustomListModal(); customAlert(linksToRegenerate.size > 0 ? `✔️ Salvo! ${linksToRegenerate.size} link(s) originais foram redefinidos.` : "✔️ Lista atualizada.", "Sucesso");
        }

        function setupEditCustomListSourceAutocomplete() {
            const input = document.getElementById('edit-custom-list-source-input');
            const hidden = document.getElementById('edit-custom-list-source');
            const tray = document.getElementById('tray-edit-custom-list-source');
            if(!input || !tray) return;

            let options = [];
            secureLinks.forEach(link => { 
                link.passwords.forEach(p => { 
                    if (p.listName !== "Senha Única") {
                        options.push({ type: 'group', linkId: link.id, listName: p.listName, linkName: link.name, label: link.name + ' (Grupo: ' + p.listName + ')', original: p });
                    } else {
                        options.push({ type: 'single', linkId: link.id, pwdId: p.id, linkName: link.name, label: link.name + ' (' + p.name + ')', original: p });
                    }
                }); 
            });
            const uniqueOptions = [];
            const seenGroups = new Set();
            options.forEach(opt => {
                if(opt.type === 'group') {
                    const key = opt.linkId + '|' + opt.listName;
                    if(!seenGroups.has(key)) { seenGroups.add(key); uniqueOptions.push(opt); }
                } else uniqueOptions.push(opt);
            });

            input.addEventListener('input', function() {
                const val = this.value.toLowerCase();
                tray.innerHTML = '';
                if(!val) { tray.style.display = 'none'; hidden.value = ''; return; }
                const matches = uniqueOptions.filter(o => o.label.toLowerCase().includes(val));
                if(matches.length === 0) { tray.style.display = 'none'; return; }
                tray.style.display = 'flex';
                matches.forEach(m => {
                    const btn = document.createElement('button');
                    btn.className = 'btn-dropdown';
                    btn.type = 'button';
                    btn.innerHTML = (m.type==='group'?'<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 512 512" fill="currentColor"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg> ':'') + m.label;
                    btn.onclick = () => {
                        if(m.type === 'group') {
                            const link = secureLinks.find(l => l.id === m.linkId);
                            const pwds = link.passwords.filter(p => p.listName === m.listName);
                            pwds.forEach(p => addEditRow(p.name, p.value, 'Avulsa', document.getElementById('custom-list-modal-list'), true, p.id));
                        } else {
                            const link = secureLinks.find(l => l.id === m.linkId);
                            const p = link.passwords.find(pw => pw.id === m.pwdId);
                            if(p) addEditRow(p.name, p.value, 'Avulsa', document.getElementById('custom-list-modal-list'), true, p.id);
                        }
                        input.value = '';
                        tray.style.display = 'none';
                        document.getElementById('add-to-custom-list-section').style.display = 'none';
                    };
                    tray.appendChild(btn);
                });
            });

            input.addEventListener('focus', function() {
                if (this.value) this.dispatchEvent(new Event('input'));
            });

            document.addEventListener('click', function (e) {
                if (e.target !== input && !tray.contains(e.target)) {
                    tray.style.display = 'none';
                }
            });
        }

        function closeCustomListModal() { 
            toggleReorderCustomListPwds(true);
            document.getElementById('custom-list-modal').classList.add('hidden'); currentCustomListId = null; 
        }
        
        function deleteCustomList(id) { 
            customConfirm("Excluir lista? (As senhas não serão apagadas dos links originais)", () => { 
                secureCustomLists = secureCustomLists.filter(p => p.id !== id); localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists)); renderCustomListsTable(); 
            }, "Excluir Lista", "Excluir"); 
        }

        // ===== MODAL: ADICIONAR SENHA À LISTA =====
        let pendingAddPwdIds = new Set();
        let addPwdPreviewOpen = false;

        function openAddPwdToListModal() {
            pendingAddPwdIds.clear();
            addPwdPreviewOpen = false;
            const countEl = document.getElementById('add-pwd-pending-count-text');
            if (countEl) countEl.innerText = '0 senhas selecionadas.';
            const preview = document.getElementById('add-pwd-pending-preview');
            if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }
            const arrow = document.getElementById('add-pwd-preview-arrow');
            if (arrow) arrow.style.transform = 'rotate(0deg)';
            const toggle = document.getElementById('add-pwd-avoid-dup-toggle'); if (toggle) toggle.checked = false;
            const suffix = document.getElementById('add-pwd-avoid-dup-suffix'); if (suffix) { suffix.value = ''; suffix.disabled = true; }
            const srcInput = document.getElementById('add-pwd-source-input'); if (srcInput) srcInput.value = '';
            const srcHidden = document.getElementById('add-pwd-source'); if (srcHidden) srcHidden.value = '';
            const container = document.getElementById('add-pwd-passwords-container'); if (container) { container.style.display = 'none'; container.innerHTML = ''; }
            setupAddPwdSourceAutocomplete();
            setupAddPwdSuffixAutocomplete();
            document.getElementById('add-pwd-to-list-modal').classList.remove('hidden');
        }

        function closeAddPwdToListModal() {
            document.getElementById('add-pwd-to-list-modal').classList.add('hidden');
            pendingAddPwdIds.clear();
        }

        function updateAddPwdPendingCounter() {
            const countEl = document.getElementById('add-pwd-pending-count-text');
            if (countEl) countEl.innerText = `${pendingAddPwdIds.size} senhas selecionadas.`;
            if (addPwdPreviewOpen) renderAddPwdPendingPreview();
        }

        function toggleAddPwdPendingPreview() {
            addPwdPreviewOpen = !addPwdPreviewOpen;
            const container = document.getElementById('add-pwd-pending-preview');
            const arrow = document.getElementById('add-pwd-preview-arrow');
            if (addPwdPreviewOpen) {
                container.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
                renderAddPwdPendingPreview();
            } else {
                container.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            }
        }

        function renderAddPwdPendingPreview() {
            const container = document.getElementById('add-pwd-pending-preview');
            container.innerHTML = '';
            if (pendingAddPwdIds.size === 0) {
                container.innerHTML = '<p style="color:#777; font-size:12px; text-align:center;">Nenhuma senha selecionada.</p>';
                return;
            }
            pendingAddPwdIds.forEach(idStr => {
                const found = findPasswordAndLink(idStr);
                if (found) {
                    const div = document.createElement('div');
                    div.style.display = 'flex'; div.style.alignItems = 'center'; div.style.marginBottom = '8px';
                    div.innerHTML = `<input type="checkbox" checked onchange="removeAddPwdPreview('${idStr}')" style="margin-right: 10px; width: 14px; height: 14px;"><span style="font-size: 13px; color: #eee; flex: 1;">${found.pwd.name}</span><span style="font-size: 13px; color: #1d7ed9; font-family: monospace;">${found.pwd.value}</span>`;
                    container.appendChild(div);
                }
            });
        }

        function removeAddPwdPreview(id) {
            pendingAddPwdIds.delete(id.toString());
            updateAddPwdPendingCounter();
            const sourceCb = document.querySelector(`.add-pwd-checkbox[value="${id}"]`);
            if (sourceCb) sourceCb.checked = false;
        }

        function setupAddPwdSourceAutocomplete() {
            const input = document.getElementById('add-pwd-source-input');
            const hidden = document.getElementById('add-pwd-source');
            const tray = document.getElementById('tray-add-pwd-source');
            if (!input || !tray) return;
            // Remove listeners anteriores clonando o elemento
            const newInput = input.cloneNode(true);
            input.parentNode.replaceChild(newInput, input);
            const inp = document.getElementById('add-pwd-source-input');

            let options = [];
            secureLinks.forEach(link => {
                link.passwords.forEach(p => {
                    if (p.listName !== 'Senha Única') {
                        options.push({ type: 'group', linkId: link.id, listName: p.listName, linkName: link.name, label: link.name + ' (Grupo: ' + p.listName + ')' });
                    } else {
                        options.push({ type: 'single', linkId: link.id, pwdId: p.id, linkName: link.name, label: link.name + ' (' + p.name + ')' });
                    }
                });
            });
            const uniqueOptions = [];
            const seenGroups = new Set();
            options.forEach(opt => {
                if (opt.type === 'group') {
                    const key = opt.linkId + '|' + opt.listName;
                    if (!seenGroups.has(key)) { seenGroups.add(key); uniqueOptions.push(opt); }
                } else { uniqueOptions.push(opt); }
            });

            const renderOptions = (filterText) => {
                tray.innerHTML = '';
                const filtered = uniqueOptions.filter(o => o.label.toLowerCase().includes(filterText.toLowerCase()));
                if (filtered.length === 0) {
                    tray.innerHTML = '<div style="padding: 10px; color: #777;">Nenhuma fonte encontrada.</div>';
                } else {
                    filtered.forEach(o => {
                        const div = document.createElement('div');
                        div.className = 'custom-select-option';
                        const icon = o.type === 'group'
                            ? '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:currentColor;"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg>'
                            : '<svg viewBox="0 0 512 512" style="width:14px;height:14px;margin-right:8px;fill:currentColor;"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>';
                        div.innerHTML = icon + o.label;
                        div.onclick = (e) => {
                            e.stopPropagation();
                            inp.value = o.label;
                            hidden.value = o.type === 'group' ? 'group|' + o.linkId + '|' + o.listName : 'single|' + o.linkId + '|' + o.pwdId;
                            tray.style.display = 'none';
                            renderAddPwdPasswords();
                        };
                        tray.appendChild(div);
                    });
                }
            };

            inp.onfocus = () => { renderOptions(inp.value); tray.style.display = 'block'; };
            inp.oninput = () => { renderOptions(inp.value); tray.style.display = 'block'; };
            document.addEventListener('click', (e) => { if (!e.target.closest('#wrapper-add-pwd-source')) tray.style.display = 'none'; });
        }

        function renderAddPwdPasswords() {
            // Salva checkboxes visíveis antes de destruir
            document.querySelectorAll('.add-pwd-checkbox').forEach(cb => {
                if (cb.checked) pendingAddPwdIds.add(cb.value); else pendingAddPwdIds.delete(cb.value);
            });
            updateAddPwdPendingCounter();

            const val = document.getElementById('add-pwd-source').value;
            const container = document.getElementById('add-pwd-passwords-container');
            container.innerHTML = '';
            if (!val) { container.style.display = 'none'; return; }
            container.style.display = 'block';

            const avoidDup = document.getElementById('add-pwd-avoid-dup-toggle') && document.getElementById('add-pwd-avoid-dup-toggle').checked;
            const suffix = document.getElementById('add-pwd-avoid-dup-suffix') ? document.getElementById('add-pwd-avoid-dup-suffix').value : '';

            // IDs que já estão na lista atual
            const currentList = secureCustomLists.find(l => l.id === currentCustomListId);
            const existingIds = new Set(currentList ? currentList.pwdIds.map(id => id.toString()) : []);

            let usedIdsInSuffix = new Set();
            if (avoidDup && suffix) {
                secureCustomLists.forEach(l => {
                    const listSuffix = l.suffix || '';
                    if ((listSuffix && listSuffix.toLowerCase() === suffix.toLowerCase()) || (!listSuffix && l.name.toLowerCase().endsWith(suffix.toLowerCase()))) {
                        l.pwdIds.forEach(id => usedIdsInSuffix.add(id.toString()));
                    }
                });
            }

            let passwordsToShow = [];
            if (val.startsWith('single|')) {
                const parts = val.split('|'); const linkId = parseInt(parts[1]); const pwdId = parseInt(parts[2]);
                const link = secureLinks.find(l => l.id === linkId);
                if (link) { const pwd = link.passwords.find(p => p.id === pwdId); if (pwd && !usedIdsInSuffix.has(pwd.id.toString())) passwordsToShow.push(pwd); }
            } else if (val.startsWith('group|')) {
                const parts = val.split('|'); const linkId = parseInt(parts[1]); const listName = parts[2];
                const link = secureLinks.find(l => l.id === linkId);
                if (link) { link.passwords.forEach(p => { if (p.listName === listName && !usedIdsInSuffix.has(p.id.toString())) passwordsToShow.push(p); }); }
            }

            if (passwordsToShow.length === 0) { container.innerHTML = '<p style="color: #777; font-size: 12px; text-align: center;">Nenhuma senha disponível (pode já estar na lista ou filtrada).</p>'; return; }

            passwordsToShow.forEach(p => {
                const alreadyIn = existingIds.has(p.id.toString());
                const isChecked = pendingAddPwdIds.has(p.id.toString()) ? 'checked' : '';
                const div = document.createElement('div'); div.style.display = 'flex'; div.style.alignItems = 'center'; div.style.marginBottom = '8px';
                div.innerHTML = `<input type="checkbox" class="add-pwd-checkbox" value="${p.id}" style="margin-right: 10px;" ${isChecked} ${alreadyIn ? 'disabled title="Já está na lista"' : ''}><span style="font-size: 13px; color: ${alreadyIn ? '#555' : '#eee'}; flex: 1;">${p.name}${alreadyIn ? ' <em style="color:#555;">(já adicionada)</em>' : ''}</span><span style="font-size: 13px; color: #1d7ed9; font-family: monospace;">${p.value}</span>`;
                container.appendChild(div);
            });
        }

        function addSelectionToAddPwdPending() {
            let added = 0; let removed = 0;
            document.querySelectorAll('.add-pwd-checkbox').forEach(cb => {
                if (cb.checked) { if (!pendingAddPwdIds.has(cb.value)) { pendingAddPwdIds.add(cb.value); added++; } }
                else { if (pendingAddPwdIds.has(cb.value)) { pendingAddPwdIds.delete(cb.value); removed++; } }
            });
            updateAddPwdPendingCounter();
            customAlert(`Seleção atualizada! (${added} adicionadas, ${removed} removidas).`, 'Seleção Adicionada');
            document.getElementById('add-pwd-source-input').value = '';
            document.getElementById('add-pwd-source').value = '';
            document.getElementById('add-pwd-passwords-container').style.display = 'none';
            document.getElementById('add-pwd-passwords-container').innerHTML = '';
        }

        function confirmAddPwdToList() {
            document.querySelectorAll('.add-pwd-checkbox').forEach(cb => {
                if (cb.checked) pendingAddPwdIds.add(cb.value); else pendingAddPwdIds.delete(cb.value);
            });
            if (pendingAddPwdIds.size === 0) { customAlert('Selecione ao menos uma senha antes de confirmar.', 'Aviso'); return; }
            const list = secureCustomLists.find(l => l.id === currentCustomListId);
            if (!list) { customAlert('Erro: lista não encontrada.', 'Erro'); return; }
            let added = 0;
            pendingAddPwdIds.forEach(id => { if (!list.pwdIds.includes(id)) { list.pwdIds.push(id); added++; } });
            localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
            closeAddPwdToListModal();
            // Reabrir o modal de gerenciar atualizado
            openCustomListModal(currentCustomListId);
            customAlert(`✔️ ${added} senha(s) adicionada(s) à lista "${list.name}".`, 'Sucesso');
        }

        // ===== MODAL: ONDE ESTÁ SENDO USADA =====
        function toggleGroupSelectMode(listName, btn) {
            const group = document.querySelector(`.list-group[data-list="${listName}"]`);
            if(!group) return;
            
            // Desativar ordenação se estiver ativa
            const reorderBtn = group.querySelector('.btn-group-reorder');
            if (reorderBtn && (reorderBtn.style.background === 'rgb(229, 57, 53)' || reorderBtn.textContent.includes('Cancelar'))) {
                toggleGroupReorderMode(listName, reorderBtn, true);
            }

            const isSelecting = btn.textContent.includes('Cancelar');
            const masterCb = group.querySelector('.master-pwd-checkbox');
            const cbs = group.querySelectorAll('.pwd-checkbox');
            
            if(isSelecting) {
                // Cancel
                btn.style.background = '#333';
                btn.style.color = '#fff';
                btn.innerHTML = 'Selecionar';
                if(masterCb) { masterCb.style.display = 'none'; masterCb.checked = false; }
                cbs.forEach(cb => { cb.style.display = 'none'; cb.checked = false; });
            } else {
                // Select
                btn.style.background = '#e53935';
                btn.style.color = '#fff';
                btn.innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
                if(masterCb) masterCb.style.display = 'inline-block';
                cbs.forEach(cb => cb.style.display = 'inline-block');
            }
        }

        function toggleGroupReorderMode(listName, btn, forceCancel = false) {
            const group = document.querySelector(`.list-group[data-list="${listName}"]`);
            if(!group) return;

            // Desativar seleção se estiver ativa
            const selectBtn = group.querySelector('.btn-group-select');
            if (!forceCancel && selectBtn && (selectBtn.style.background === 'rgb(229, 57, 53)' || selectBtn.textContent.includes('Cancelar'))) {
                toggleGroupSelectMode(listName, selectBtn);
            }

            const isReordering = btn.textContent.includes('Cancelar') || forceCancel;
            
            if(isReordering) {
                // Cancel
                btn.style.background = '#333';
                btn.style.color = '#fff';
                btn.innerHTML = 'Editar Ordem';
            } else {
                // Reorder
                btn.style.background = '#e53935';
                btn.style.color = '#fff';
                btn.innerHTML = `<svg class="ui-icon" style="margin:0; width:14px; height:14px;" viewBox="0 0 384 512" fill="currentColor"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> Cancelar`;
            }

            const rowsContainer = group.querySelector('.list-rows-container');
            const currentRows = Array.from(rowsContainer.querySelectorAll('.edit-pw-row'));
            const pwds = currentRows.map(r => {
                return {
                    id: r.dataset.id,
                    name: r.querySelector('.edit-pw-name').value,
                    value: r.querySelector('.edit-pw-value').value
                };
            });
            
            rowsContainer.innerHTML = '';
            pwds.forEach(p => {
                addEditRow(p.name, p.value, listName, rowsContainer, false, p.id);
            });
        }

        function deleteGroupSelectedOrAll(listName) {
            const group = document.querySelector(`.list-group[data-list="${listName}"]`);
            if(!group) return;

            const checkedCbs = Array.from(group.querySelectorAll('.pwd-checkbox:checked'));
            
            if (checkedCbs.length > 0) {
                customConfirm(`Deseja remover as ${checkedCbs.length} senha(s) selecionada(s) do grupo?`, () => {
                    checkedCbs.forEach(cb => {
                        const row = cb.closest('.edit-pw-row');
                        if (row) row.remove();
                    });
                    const countEl = group.querySelector('.group-pwd-count-text');
                    const remaining = group.querySelectorAll('.edit-pw-row').length;
                    if (countEl) countEl.innerText = `| ${remaining} senha(s)`;
                }, "Excluir Seleção", "Remover");
            } else {
                customConfirm(`Tem certeza que deseja apagar TODAS as senhas do grupo "${listName}"?`, () => {
                    group.querySelectorAll('.edit-pw-row').forEach(row => row.remove());
                    const countEl = group.querySelector('.group-pwd-count-text');
                    if (countEl) countEl.innerText = `| 0 senha(s)`;
                }, "Excluir Tudo", "Excluir");
            }
        }

        function checkGroupUsage(listName) {
            const group = document.querySelector(`.list-group[data-list="${listName}"]`);
            if(!group) return;
            
            // Verifica se tem checkboxes checados
            const checkedIds = Array.from(group.querySelectorAll('.pwd-checkbox:checked')).map(cb => cb.value);
            
            // Pega todas as senhas desse grupo no link atual
            const currentLink = secureLinks.find(l => l.id === currentEditId);
            if(!currentLink) return;
            
            const groupPwds = currentLink.passwords.filter(p => p.listName === listName);
            const targetIds = checkedIds.length > 0 ? groupPwds.filter(p => checkedIds.includes(p.id.toString())).map(p => p.id.toString()) : groupPwds.map(p => p.id.toString());
            
            const pwdIdsSet = new Set(targetIds);
            const usedInLists = secureCustomLists.filter(l => l.pwdIds.some(id => pwdIdsSet.has(id.toString())));
            
            const title = document.getElementById('pwd-usage-modal-title');
            const body = document.getElementById('pwd-usage-modal-body');
            title.innerText = checkedIds.length > 0 ? `Listas que usam as ${checkedIds.length} senha(s) selecionada(s)` : `Listas que usam o grupo "${listName}"`;
            
            body.innerHTML = '';
            if (usedInLists.length === 0) {
                body.innerHTML = '<p style="color:#777; text-align:center; padding: 20px 0;">Nenhuma destas senhas está sendo usada em listas.</p>';
            } else {
                usedInLists.forEach(l => {
                    const btn = document.createElement('button');
                    btn.style.cssText = 'display:flex; align-items:center; gap:10px; width:100%; background:#1a1a1a; border:1px solid #333; border-radius:8px; padding:12px 15px; color:#1d7ed9; font-size:14px; font-weight:bold; cursor:pointer; margin-bottom:8px; text-align:left; transition: background 0.2s;';
                    btn.onmouseover = () => btn.style.background = '#222';
                    btn.onmouseout = () => btn.style.background = '#1a1a1a';
                    const pwdsInList = l.pwdIds.filter(id => pwdIdsSet.has(id.toString())).length;
                    btn.innerHTML = `<svg viewBox="0 0 512 512" style="width:16px;height:16px;fill:#1d7ed9;flex-shrink:0;"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg><span style="flex:1;">${l.name}${l.suffix || ''}</span><span style="font-size:12px; color:#aaa; font-weight:normal;">${pwdsInList} senha(s) dessa seleção</span>`;
                    btn.onclick = () => goToList(l.id);
                    body.appendChild(btn);
                });
            }
            document.getElementById('pwd-usage-modal').classList.remove('hidden');
        }

        function openPwdUsageModal(linkId) {
            const link = secureLinks.find(l => l.id === linkId);
            if (!link) return;
            const pwdIds = new Set(link.passwords.map(p => p.id.toString()));
            const usedInLists = secureCustomLists.filter(l => l.pwdIds.some(id => pwdIds.has(id.toString())));
            const title = document.getElementById('pwd-usage-modal-title');
            const body = document.getElementById('pwd-usage-modal-body');
            title.innerText = `Listas que usam "${link.name}"`;
            body.innerHTML = '';
            if (usedInLists.length === 0) {
                body.innerHTML = '<p style="color:#777; text-align:center; padding: 20px 0;">Este acesso não está sendo usado em nenhuma lista.</p>';
            } else {
                usedInLists.forEach(l => {
                    const btn = document.createElement('button');
                    btn.style.cssText = 'display:flex; align-items:center; gap:10px; width:100%; background:#1a1a1a; border:1px solid #333; border-radius:8px; padding:12px 15px; color:#1d7ed9; font-size:14px; font-weight:bold; cursor:pointer; margin-bottom:8px; text-align:left; transition: background 0.2s;';
                    btn.onmouseover = () => btn.style.background = '#222';
                    btn.onmouseout = () => btn.style.background = '#1a1a1a';
                    const pwdsInList = l.pwdIds.filter(id => pwdIds.has(id.toString())).length;
                    btn.innerHTML = `<svg viewBox="0 0 512 512" style="width:16px;height:16px;fill:#1d7ed9;flex-shrink:0;"><path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/></svg><span style="flex:1;">${l.name}${l.suffix || ''}</span><span style="font-size:12px; color:#aaa; font-weight:normal;">${pwdsInList} senha(s)</span>`;
                    btn.onclick = () => goToList(l.id);
                    body.appendChild(btn);
                });
            }
            document.getElementById('pwd-usage-modal').classList.remove('hidden');
        }

        function closePwdUsageModal() {
            document.getElementById('pwd-usage-modal').classList.add('hidden');
        }

        function goToList(listId) {
            // Fecha todos os modais abertos
            document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
            currentCustomListId = null;
            // Abre o gerenciar da lista desejada
            openCustomListModal(listId);
        }

        function setupAddPwdSuffixAutocomplete() {
            const input = document.getElementById('add-pwd-avoid-dup-suffix');
            const listContainer = document.getElementById('add-pwd-suffix-autocomplete-list');
            if(!input || !listContainer) return;
            const newInput = input.cloneNode(true);
            input.parentNode.replaceChild(newInput, input);
            const inp = document.getElementById('add-pwd-avoid-dup-suffix');
            
            inp.addEventListener('focus', function() {
                const val = this.value;
                listContainer.innerHTML = '';
                listContainer.classList.remove('active');
                const suffixes = new Set();
                secureCustomLists.forEach(l => {
                    if (l.suffix) suffixes.add(l.suffix);
                    else {
                        const parts = l.name.split('_');
                        if (parts.length > 1) suffixes.add('_' + parts[parts.length - 1]);
                    }
                });
                const sorted = Array.from(suffixes).sort();
                if (sorted.length === 0) return;
                sorted.forEach(s => {
                    if (s.toLowerCase().includes(val.toLowerCase()) || !val) {
                        const div = document.createElement('div');
                        div.innerHTML = s;
                        div.addEventListener('click', function(e) {
                            inp.value = s;
                            listContainer.innerHTML = '';
                            listContainer.classList.remove('active');
                            renderAddPwdPasswords();
                        });
                        listContainer.appendChild(div);
                    }
                });
                if (listContainer.innerHTML !== '') listContainer.classList.add('active');
            });
            inp.addEventListener('input', function() {
                this.dispatchEvent(new Event('focus'));
                renderAddPwdPasswords();
            });
            document.addEventListener('click', function(e) {
                if (e.target !== inp) {
                    listContainer.innerHTML = '';
                    listContainer.classList.remove('active');
                }
            });
        }

        // --- EXPORT/IMPORT ---
        function getSelectedLinks() { const ids = Array.from(document.querySelectorAll('#links-table-body .row-checkbox:checked')).map(cb => parseInt(cb.dataset.id)); return secureLinks.filter(l => ids.includes(l.id)); }
        
        function exportBackup(scope, format) {
            const dataLinks = scope === 'all' ? secureLinks : getSelectedLinks(); if(dataLinks.length === 0) { customAlert("Nenhum acesso selecionado na tabela."); return; }
            if (format === 'json') {
                const payload = { links: dataLinks, playlists: scope === 'all' ? secureCustomLists : [] }; const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `backup_acessos_${Date.now()}.json`; a.click(); URL.revokeObjectURL(url);
            } else if (format === 'txt') {
                let txt = "=== RELATÓRIO DE ACESSOS E SENHAS ===\n\n";
                dataLinks.forEach(link => {
                    txt += `📌 ACESSO: ${link.name}\n🔗 Link Seguro: ${link.url}\n🎯 Destino Oculto: ${link.target}\n`; const grouped = {}; link.passwords.forEach(p => { const ln = p.listName || 'Avulsa'; if(!grouped[ln]) grouped[ln] = []; grouped[ln].push(p); });
                    for (const [lName, pwds] of Object.entries(grouped)) { txt += `\n  📁 Grupo: ${lName}\n`; pwds.forEach(p => txt += `    • ${p.name}: ${p.value}\n`); } txt += `\n---------------------------------------\n\n`;
                });
                const blob = new Blob([txt], {type: 'text/plain'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `senhas_formatadas_${Date.now()}.txt`; a.click(); URL.revokeObjectURL(url);
            }
            document.getElementById('backup-dropdown').classList.remove('active');
        }

        function importBackup(e) {
            const file = e.target.files[0]; if(!file) return; const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const imported = JSON.parse(evt.target.result); let linksToImport = Array.isArray(imported) ? imported : (imported.links || []); let plsToImport = imported.playlists || []; let addedL = 0, addedP = 0;
                    linksToImport.forEach(impLink => { if(!secureLinks.find(l => l.id === impLink.id)) { secureLinks.push(impLink); addedL++; } });
                    plsToImport.forEach(impPl => { if(!secureCustomLists.find(p => p.id === impPl.id)) { secureCustomLists.push(impPl); addedP++; } });
                    localStorage.setItem('secure_links_v17', JSON.stringify(secureLinks)); localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
                    renderAdminTable(); renderCustomListsTable(); customAlert(`Backup importado! ${addedL} novos acessos e ${addedP} listas foram adicionadas.`, "Sucesso");
                } catch(err) { customAlert("Arquivo JSON inválido.", "Erro"); }
                e.target.value = ''; document.getElementById('backup-dropdown').classList.remove('active');
            }; reader.readAsText(file);
        }

        function exportGitHubHTML() {
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            fetch(cleanUrl)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.text();
            })
            .catch(() => {
                return document.documentElement.outerHTML;
            })
            .then(html => {
                const hashes = [];
                secureLinks.forEach(link => {
                    if (link.url) {
                        try {
                            const urlObj = new URL(link.url);
                            const p = urlObj.searchParams.get('p');
                            if (p) {
                                const hash = CryptoJS.SHA256(p).toString();
                                hashes.push(hash);
                            }
                        } catch(e) {}
                    }
                });
                
                const hashesStr = hashes.map(h => `"${h}"`).join(", ");
                let updatedHtml = html;
                const regex = /const\s+ACTIVE_PAYLOAD_HASHES\s*=\s*\[([\s\S]*?)\];/;
                updatedHtml = updatedHtml.replace(regex, `const ACTIVE_PAYLOAD_HASHES = [ ${hashesStr} ];`);
                
                navigator.clipboard.writeText(updatedHtml).then(() => {
                    customAlert("🎉 Excelente! O código inteiro da página (index.html) foi ATUALIZADO com as chaves ativas atuais e copiado com sucesso para a sua área de transferência (Clipboard)!\n\nAgora basta você ir no GitHub, abrir o seu arquivo 'index.html', selecionar todo o conteúdo anterior e colar o novo por cima.\n\nTodos os links deletados, redefinidos ou editados anteriormente foram anulados e estão desabilitados definitivamente!", "Crescimento & Segurança");
                }).catch(() => {
                    const blob = new Blob([updatedHtml], {type: 'text/html'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = "index.html";
                    a.click();
                    URL.revokeObjectURL(url);
                    customAlert("Seu navegador impediu a cópia automática. O código atualizado foi baixado como arquivo 'index.html'.\n\nSubstitua o arquivo na página do seu repositório no GitHub para atualizar seus acessos e invalidar definitivamente os links antigos.", "Download Concluído");
                });
            });
        }
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('custom-dialog-overlay')) {
                e.target.classList.add('hidden');
            }
            
            if (!e.target.closest('.settings-container')) {
                const backupMenu = document.getElementById('backup-dropdown');
                if (backupMenu) backupMenu.classList.remove('active');
                const arrow = document.getElementById('btn-arquivos-arrow');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            }
            if (!e.target.closest('.custom-select-wrapper')) {
                document.querySelectorAll('.custom-select-tray').forEach(d => d.classList.remove('active'));
                document.querySelectorAll('.custom-select-arrow').forEach(arr => {
                    if(arr.id.startsWith('arrow-')) arr.style.transform = 'rotate(0deg)';
                });
            }
        });
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const openModals = Array.from(document.querySelectorAll('.modal-overlay:not(.hidden), .custom-dialog-overlay:not(.hidden)'));
                if (openModals.length > 0) {
                    openModals.sort((a, b) => {
                        const zA = parseInt(window.getComputedStyle(a).zIndex) || 1000;
                        const zB = parseInt(window.getComputedStyle(b).zIndex) || 1000;
                        return zB - zA;
                    });
                    openModals[0].classList.add('hidden');
                }
            }
        });

        // Initialize static custom trays
        window.addEventListener('DOMContentLoaded', () => {
            buildCustomTray('access-type');
        });

        let currentSuffixFocus = -1;
        function setupSuffixAutocomplete() {
            const inp = document.getElementById('avoid-dup-suffix');
            const listContainer = document.getElementById('suffix-autocomplete-list');
            if(!inp || !listContainer) return;
            inp.addEventListener('input', function(e) {
                renderSourcePasswords();
                let val = this.value;
                closeAllLists();
                currentSuffixFocus = -1;
                let suffixes = [...new Set(secureCustomLists.map(l => l.suffix).filter(s => s))];
                if (suffixes.length === 0) return;
                suffixes.forEach(s => {
                    if (s.toLowerCase().includes(val.toLowerCase()) || !val) {
                        const b = document.createElement('div');
                        b.textContent = s;
                        b.addEventListener('click', function(e) {
                            inp.value = this.textContent;
                            closeAllLists();
                            renderSourcePasswords();
                        });
                        listContainer.appendChild(b);
                    }
                });
                if (listContainer.innerHTML !== '') listContainer.classList.add('active');
            });
            inp.addEventListener('focus', function(e) { if(!inp.disabled) inp.dispatchEvent(new Event('input')); });
            inp.addEventListener('keydown', function(e) {
                let x = listContainer.getElementsByTagName('div');
                if (e.keyCode === 40) { currentSuffixFocus++; addActive(x); e.preventDefault(); }
                else if (e.keyCode === 38) { currentSuffixFocus--; addActive(x); e.preventDefault(); }
                else if (e.keyCode === 13) { if (currentSuffixFocus > -1 && x.length > 0) { e.preventDefault(); x[currentSuffixFocus].click(); } else { closeAllLists(); } }
                else if (e.keyCode === 27) { closeAllLists(); }
            });
            function addActive(x) {
                if (!x || x.length === 0) return;
                removeActive(x);
                if (currentSuffixFocus >= x.length) currentSuffixFocus = 0;
                if (currentSuffixFocus < 0) currentSuffixFocus = (x.length - 1);
                x[currentSuffixFocus].classList.add('autocomplete-active');
                x[currentSuffixFocus].scrollIntoView({block: 'nearest'});
            }
            function removeActive(x) { for (let i = 0; i < x.length; i++) { x[i].classList.remove('autocomplete-active'); } }
            function closeAllLists(elmnt) { if (elmnt !== listContainer && elmnt !== inp) { listContainer.innerHTML = ''; listContainer.classList.remove('active'); } }
            document.addEventListener('click', function (e) { closeAllLists(e.target); });
        }
        setupSuffixAutocomplete();

        function toggleSelectAllLists(source) {
            const checkboxes = document.querySelectorAll('.list-checkbox');
            checkboxes.forEach(cb => cb.checked = source.checked);
        }



        function toggleListActionsDropdown(e) {
            e.stopPropagation();
            document.querySelectorAll('.settings-dropdown.active').forEach(d => { if(d.id !== 'list-actions-dropdown') d.classList.remove('active'); });
            const dropdown = document.getElementById('list-actions-dropdown');
            const icon = document.getElementById('icon-list-actions');
            const wasActive = dropdown.classList.contains('active');
            dropdown.classList.toggle('active');
            if (dropdown.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                positionDropdown(dropdown, e.currentTarget);
            } else {
                icon.style.transform = '';
            }
        }

        function bulkDeleteCustomLists() {
            const selected = Array.from(document.querySelectorAll('.list-checkbox:checked')).map(cb => cb.dataset.id);
            if (selected.length > 0) {
                customConfirm(`Apagar definitivamente as ${selected.length} lista(s) selecionada(s)?`, () => {
                    secureCustomLists = secureCustomLists.filter(p => !selected.includes(p.id));
                    localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
                    renderCustomListsTable();
                }, "Apagar Seleção", "Apagar");
            } else {
                if(secureCustomLists.length === 0) { customAlert("Não há listas para apagar.", "Aviso"); return; }
                customConfirm("Nenhuma lista selecionada. Deseja apagar TODAS as listas definitivamente?", () => {
                    secureCustomLists = [];
                    localStorage.setItem('secure_playlists_v1', JSON.stringify(secureCustomLists));
                    renderCustomListsTable();
                }, "Apagar Tudo", "Apagar Tudo");
            }
        }

        function recoverCustomListsFromBrowser() {
            scanAndRecoverData();
        }

        function closeListActionsDropdown() {
            const dropdown = document.getElementById('list-actions-dropdown');
            const icon = document.getElementById('icon-list-actions');
            if (dropdown && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                if(icon) icon.style.transform = '';
            }
        }
        document.addEventListener('click', closeListActionsDropdown);

        function downloadCustomListTxt() {
            const listName = document.getElementById('custom-list-name-input').value;
            const listSuffix = document.getElementById('custom-list-suffix-input').value;
            let txt = ":\n\n";
            document.querySelectorAll('#custom-list-modal-list .edit-pw-row').forEach(r => { const n = r.querySelector('.edit-pw-name').value; const v = r.querySelector('.edit-pw-value').value; txt += "- : \n"; });
            const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = ".txt"; link.click();
        }
        function generateAllCustomListsText() {
            let txt = '';
            secureCustomLists.forEach(list => {
                txt += ":\n\n";
                list.pwdIds.forEach(id => { const found = findPasswordAndLink(id); if (found) { txt += "- : \n"; } });
                txt += "\n----------------------------------------\n\n";
            });
            return txt.trim();
        }
        function copyAllCustomListsFormatted() {
            const txt = generateAllCustomListsText(); if(!txt) { customAlert('Nenhuma lista para copiar.', 'Aviso'); return; }
            navigator.clipboard.writeText(txt).then(() => customAlert('Todas as listas copiadas!', 'Copiado'));
        }
        function downloadAllCustomListsTxt() {
            const txt = generateAllCustomListsText(); if(!txt) { customAlert('Nenhuma lista para baixar.', 'Aviso'); return; }
            const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'Listas_Personalizadas.txt'; link.click();
        }

        document.addEventListener('DOMContentLoaded', () => {
            const customListModalList = document.getElementById('custom-list-modal-list');
            if (customListModalList) {
                const customListObserver = new MutationObserver(() => {
                    const cnt = document.querySelectorAll('#custom-list-modal-list .edit-pw-row').length;
                    const el = document.getElementById('custom-list-pwd-count');
                    if(el) el.innerText = cnt + ' senha(s)';
                });
                customListObserver.observe(customListModalList, { childList: true });
            }
            const editModalList = document.getElementById('edit-modal-list');
            if (editModalList) {
                const editObserver = new MutationObserver(() => {
                    document.querySelectorAll('#edit-modal-list .list-group').forEach(group => {
                        const cnt = group.querySelectorAll('.edit-pw-row').length;
                        const el = group.querySelector('.group-pwd-count-text');
                        if (el) {
                            const newText = '| ' + cnt + ' senha(s)';
                            if (el.innerText !== newText) el.innerText = newText;
                        }
                    });
                });
                editObserver.observe(editModalList, { childList: true, subtree: true });
            }
        });
