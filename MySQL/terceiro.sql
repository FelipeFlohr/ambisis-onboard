select
	id as numero,
	concat(razaoSocial, cnpj) as empresa,
	representanteLegal as contato,
	emailrepresentantelegal as email,
	(
		select telefone 
		from clientecontato 
		where clientecontato.clienteId = cliente.id 
		limit 1 -- Gets the first
	) as telefone,
	(
		select group_concat(au.nome separator ", ") as responsavel
		from cliente c 
		left join responsavel r on (r.module = 'cliente' and r.moduleId = c.id)
		left join auth_usuario au on r.responsavelId = au.id
		where cliente.id = r.moduleId -- Filtering
	) as responsavel,
	(
		select if(c.ehMensalista, "Sim", "Não") -- if() function // MySQL only
		from cliente c
		where c.id = cliente.id
	) as mensalista,
	(
		select if(c.status, "Ativo", "Desativado")
		from cliente c
		where c.id = cliente.id
	) as status
from cliente;