select li.id, li.numero, COUNT(co.licencaId) as quantidade_condicionantes
from licenca li 
left join condicionante co on li.id = co.licencaId
group by li.id;