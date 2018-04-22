CREATE SCHEMA projschema;

CREATE TABLE projschema.companies (companyId BIGSERIAL PRIMARY KEY,socialName     varchar(80) not null, legalName     varchar(80), CNPJ  varchar(21), primaryActivity     varchar(80), secundaryActivity     varchar(80), employees     int, size     varchar(80),isClient boolean,wasCLient boolean,      	address int references addresses (addressId),createdDate time,clientFrom time,clientTo time);

CREATE TABLE projschema.addresses(addressId BIGSERIAL PRIMARY KEY, country      varchar(80),state      varchar(80),city      varchar(80) ,street      varchar(80) ,streetNumber      varchar(80),reference      varchar(80),postalCode   int);

CREATE TABLE projschema.contacts (contactId BIGSERIAL PRIMARY KEY,name      varchar(80) not null,email      varchar(80) ,phone      varchar(80) ,role      varchar(80) ,influency   int,company   BIGSERIAL references projschema.companies(companyId),createdDate time);

CREATE TABLE projschema.recomendations (
		recomendationId BIGSERIAL PRIMARY KEY not null,
        recommended   BIGSERIAL references projschema.companies(companyId) not null,
        destiny      BIGSERIAL references projschema.companies(companyId) not null,
        fit	 int,
        converted  boolean,
        createdDate  date
);