 function clicou() {
        
 		let res = document.querySelector('section#res')

        let A = Number(document.getElementById('A').value)

        let B = Number(document.getElementById('B').value) 
        
        let C = Number(document.getElementById('C').value) 
 
        let delta = (B ** 2) - (4 * A * C)

        if (delta < 0) {
        	res.innerHTML = '<p>Cannot calculate as Delta is less than zero.</p>'
        } else { 


        let X1 = Number((-B + Math.sqrt(delta)) / (2 * A))

        let X2 = Number((-B - Math.sqrt(delta)) / 2 * A)
  			
        res.innerHTML = `<h2><p>Solving and Bhaskara</p></h2>`

        res.innerHTML += `<p>X1 = <strong>${X1}</strong></p>`

        res.innerHTML += `<p>X2 = <strong>${X2}</strong></p>`

        res.innerHTML += `<p>The calculated value was<strong>∆ = <mark>${delta}</mark></strong></p>`
        }  		
      }
