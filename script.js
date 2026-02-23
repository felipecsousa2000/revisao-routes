function normalizar(texto) {
    return texto.replace(/\s+/g, ' ')
                .trim()
                .toLowerCase();
}

function corrigir() {

    const respostas = {
        q1: "from mercado import app",
        q2: "from flask import render_template, redirect, url_for",
        q3: "from mercado.models import item, user",
        q4: "from mercado.forms import cadastroform",
        q5: "from mercado import db",
        q6: "@app.route('/')",
        q7: "return render_template('index.html')",
        q8: "itens = item.query.all()",
        q9: "return render_template('produtos.html', itens=itens)",
        q10: "@app.route('/cadastro', methods=['get', 'post'])",
        q11: "form = cadastroform()",
        q12: "if form.validate_on_submit()",
        q13: `usuario = user( usuario=form.usuario.data, email=form.email.data, senha=form.senha1.data )`,
        q14: "db.session.add(usuario)",
        q15: "db.session.commit()",
        q16: "return redirect(url_for('page_home'))",
        q17: "return render_template('cadastro.html', form=form)"
    };

    let acertos = 0;

    for (let i = 1; i <= 17; i++) {

        let input = normalizar(document.getElementById("q" + i).value);
        let respostaCorreta = normalizar(respostas["q" + i]);
        let resultado = document.getElementById("r" + i);

        if (input === respostaCorreta) {
            resultado.innerHTML = "✔ Correto!";
            resultado.className = "resultado correto";
            acertos++;
        } else {
            resultado.innerHTML = "✖ Incorreto.";
            resultado.className = "resultado errado";
        }
    }

    let notaFinal = document.getElementById("notaFinal");
    notaFinal.innerHTML = "Pontuação: " + acertos + " / 17";

    if (acertos === 17) {
        notaFinal.innerHTML += " 🎉 Excelente!";
    }
}