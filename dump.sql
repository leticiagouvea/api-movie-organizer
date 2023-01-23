--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: genres; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    name text NOT NULL,
    "genreId" integer,
    "platformId" integer,
    status boolean DEFAULT false NOT NULL,
    note text
);


--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: platforms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.platforms (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);


--
-- Name: platforms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.platforms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: platforms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.platforms_id_seq OWNED BY public.platforms.id;


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: platforms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms ALTER COLUMN id SET DEFAULT nextval('public.platforms_id_seq'::regclass);


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.genres VALUES (1, 'Suspense');
INSERT INTO public.genres VALUES (2, 'Ação');
INSERT INTO public.genres VALUES (3, 'Romance');
INSERT INTO public.genres VALUES (4, 'Terror');
INSERT INTO public.genres VALUES (5, 'Comédia');
INSERT INTO public.genres VALUES (6, 'Ficção científica');
INSERT INTO public.genres VALUES (7, 'Desenho Animado');
INSERT INTO public.genres VALUES (8, 'Aventura');
INSERT INTO public.genres VALUES (9, 'Drama');


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.movies VALUES (2, 'Titanic', 3, 1, false, NULL);
INSERT INTO public.movies VALUES (1, 'Matrix', 6, 2, true, 'Gostei');
INSERT INTO public.movies VALUES (7, 'Anabelle', 4, 5, false, NULL);
INSERT INTO public.movies VALUES (9, 'Se beber não case', 5, 1, false, NULL);
INSERT INTO public.movies VALUES (10, 'Vizinhos', 5, 2, false, NULL);
INSERT INTO public.movies VALUES (12, 'O Regresso', 9, 2, false, NULL);
INSERT INTO public.movies VALUES (13, 'Procurando Nemo', 7, 4, false, NULL);
INSERT INTO public.movies VALUES (14, 'O Rei Leão', 7, 4, false, NULL);
INSERT INTO public.movies VALUES (15, 'Aladdin', 7, 4, false, NULL);
INSERT INTO public.movies VALUES (16, 'Fratura', 1, 5, false, NULL);
INSERT INTO public.movies VALUES (17, 'Jogos Vorazes', 6, 6, false, NULL);
INSERT INTO public.movies VALUES (18, 'Tropa de Elite', 2, 3, false, NULL);
INSERT INTO public.movies VALUES (19, 'Jurassic World', 8, 2, false, NULL);
INSERT INTO public.movies VALUES (8, 'Hereditário', 4, 5, true, 'Um filme bem traumatizante, não recomendo.');
INSERT INTO public.movies VALUES (11, 'Minha mãe é uma peça', 5, 3, true, 'Um ótimo filme pra curtir em família.');


--
-- Data for Name: platforms; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.platforms VALUES (1, 'Netflix');
INSERT INTO public.platforms VALUES (2, 'Amazon Prime');
INSERT INTO public.platforms VALUES (3, 'GloboPlay');
INSERT INTO public.platforms VALUES (4, 'Disney+');
INSERT INTO public.platforms VALUES (5, 'HBO Max');
INSERT INTO public.platforms VALUES (6, 'Paramount+');


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.genres_id_seq', 9, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.movies_id_seq', 19, true);


--
-- Name: platforms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.platforms_id_seq', 6, true);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: platforms platforms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.platforms
    ADD CONSTRAINT platforms_pkey PRIMARY KEY (id);


--
-- Name: movies movies_genreId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES public.genres(id);


--
-- Name: movies movies_platformId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "movies_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES public.platforms(id);


--
-- PostgreSQL database dump complete
--

