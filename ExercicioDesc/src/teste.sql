select
	cliente.id as numero,
	(CONCAT(razaoSocial, cnpj)) as empresa,
	cliente.representanteLegal as contato,
	cliente.emailrepresentantelegal as email,
	(
	select
		clientecontato.telefone
	from
		clientecontato
	where
		(clientecontato.clienteId = cliente.id)
	limit 1;
) as telefone
from
	cliente;