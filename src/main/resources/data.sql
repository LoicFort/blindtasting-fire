
CREATE TABLE wine (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    domain VARCHAR(255),
    bottle_name VARCHAR(255),
    vintage VARCHAR(255),
    grape VARCHAR(100)
);


CREATE TABLE "B_T_USER" (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(255),
    username VARCHAR(255),
    session_id BIGINT,
    wine_id BIGINT,
    CONSTRAINT fk_wine_id FOREIGN KEY (wine_id) REFERENCES wine(id) ON DELETE CASCADE
);


---- Table `wine_grape` (Mapping table for the many-to-many relationship between wine and grape)
--CREATE TABLE wine_grape (
--    wine_id BIGINT,
--    grape_id BIGINT,
--    PRIMARY KEY (wine_id, grape_id),
--    CONSTRAINT fk_wine_grape_wine_id FOREIGN KEY (wine_id) REFERENCES wine(id) ON DELETE CASCADE,
--    CONSTRAINT fk_wine_grape_grape_id FOREIGN KEY (grape_id) REFERENCES grape(id) ON DELETE CASCADE
--);
