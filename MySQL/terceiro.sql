select
	id as Numero,
	concat(razaoSocial, cnpj) as Empresa,
	representanteLegal as Contato,
	emailrepresentantelegal as Email,
	(select telefone from clientecontato where clientecontato.clienteId = cliente.id limit 1) as Telefone,
	
from cliente;