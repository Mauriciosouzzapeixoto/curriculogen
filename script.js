/**
 * CURRÍCULOGEN - ENGINE
 * Mauricio Peixoto | Linhagem SPARK
 */

function sync() {
    // Dados Básicos
    document.getElementById('p-nome').innerText = document.getElementById('f-nome').value.toUpperCase() || "NOME COMPLETO";
    document.getElementById('p-cargo').innerText = document.getElementById('f-profissao').value.toUpperCase() || "CARGO PRETENDIDO";
    
    const local = document.getElementById('f-local').value;
    const email = document.getElementById('f-email').value;
    const tel = document.getElementById('f-tel').value;
    document.getElementById('p-contato').innerText = `${local} | ${email} | ${tel}`;

    const linkedin = document.getElementById('f-linkedin').value;
    const github = document.getElementById('f-github').value;
    document.getElementById('p-links').innerText = `${linkedin} ${github ? ' | ' + github : ''}`;

    // PcD
    if (document.getElementById('pcd-toggle').checked) {
        const cid = document.getElementById('f-pcd-cid').value;
        const nec = document.getElementById('f-pcd-nec').value;
        document.getElementById('p-pcd-info').innerText = `${cid} - ${nec}`;
    }

    // Listas dinâmicas
    updateDynamicSection('.exp-group', 'p-exp-render');
    updateDynamicSection('.edu-group', 'p-edu-render');
    updateDynamicSection('.course-group', 'p-course-render');
    
    // Skills
    const skillContainer = document.getElementById('p-skills-render');
    skillContainer.innerHTML = '';
    document.querySelectorAll('.skill-tag-input').forEach(el => {
        if (el.value) skillContainer.innerHTML += `<span class="badge-skill">${el.value}</span>`;
    });
}

function updateDynamicSection(inputClass, outputId) {
    const output = document.getElementById(outputId);
    output.innerHTML = '';
    document.querySelectorAll(inputClass).forEach(block => {
        const t1 = block.querySelector('.in-t1').value;
        const t2 = block.querySelector('.in-t2').value;
        if (t1) {
            output.innerHTML += `<div class="cv-item-block"><strong>${t1}</strong><p>${t2}</p></div>`;
        }
    });
}

function addBlock(type) {
    let containerId = '';
    let groupClass = '';
    let label1 = '';
    let label2 = '';

    if (type === 'exp') {
        containerId = 'exp-inputs-list';
        groupClass = 'exp-group';
        label1 = 'Cargo/Função';
        label2 = 'Empresa / Período';
    } else if (type === 'edu') {
        containerId = 'edu-inputs-list';
        groupClass = 'edu-group';
        label1 = 'Curso de Formação';
        label2 = 'Instituição / Ano';
    } else if (type === 'course') {
        containerId = 'course-inputs-list';
        groupClass = 'course-group';
        label1 = 'Curso / Certificação';
        label2 = 'Instituição / Carga Horária / Ano';
    } else {
        return;
    }

    const div = document.createElement('div');
    div.className = `input-block-item ${groupClass}`;
    div.innerHTML = `
        <input type="text" class="in-t1" placeholder="${label1}" oninput="sync()">
        <input type="text" class="in-t2" placeholder="${label2}" oninput="sync()">
        <button onclick="this.parentElement.remove(); sync()" class="btn-del">×</button>
    `;
    document.getElementById(containerId).appendChild(div);
}

function addSkillInput() {
    const input = document.createElement('input');
    input.className = 'skill-tag-input';
    input.placeholder = 'Ex: Java';
    input.oninput = sync;
    document.getElementById('skill-inputs-list').appendChild(input);
}

function togglePcd() {
    const active = document.getElementById('pcd-toggle').checked;
    document.getElementById('pcd-form').classList.toggle('hidden-pcd', !active);
    document.getElementById('p-pcd-area').classList.toggle('hidden-pcd', !active);
    sync();
}

function gerarPdfOuImprimir() {
    sync();
    window.print();
}

// Inicializa escuta global
document.addEventListener('DOMContentLoaded', sync);