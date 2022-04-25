select STR_TO_DATE(validade, "%d/ %m/ %Y") as vencimento
from licenca
where DATE_FORMAT(STR_TO_DATE(validade, "%d/ %m/ %Y"), "%m-%y") = DATE_FORMAT(sysdate(), "%m-%y")