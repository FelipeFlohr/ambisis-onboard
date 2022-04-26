select
	c.id as numero,
	(CONCAT(razaoSocial, cnpj)) as empresa,
	c.representanteLegal as contato,
	c.emailrepresentantelegal as email,
	cc.telefone as telefone,
	group_concat(au.nome separator ", ") as responsavel,
	if(c.ehMensalista, "Sim", "Não") as mensalista,
	if(c.status, "Ativo", "Desativado") as status
from
	cliente c
left join clientecontato cc on
	(cc.clienteId = c.id)
left join responsavel re on
	(re.module = "cliente" and re.moduleId = c.id)
left join auth_usuario au on
	(re.responsavelId = au.id)
group by
	c.id;

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