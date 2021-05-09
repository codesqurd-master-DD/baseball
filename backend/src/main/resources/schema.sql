-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema baseball_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema baseball_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `baseball_db` DEFAULT CHARACTER SET utf8 ;
USE `baseball_db` ;

-- -----------------------------------------------------
-- Table `baseball_db`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`team` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`team` (
                                                    `id` INT NOT NULL AUTO_INCREMENT,
                                                    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`player`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`player` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`player` (
                                                      `id` INT NOT NULL AUTO_INCREMENT,
                                                      `player_name` VARCHAR(45) NOT NULL,
    `player_number` INT UNSIGNED NOT NULL,
    `is_pitcher` TINYINT NOT NULL,
    `team_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_player_team1_idx` (`team_id` ASC) VISIBLE,
    CONSTRAINT `fk_player_team1`
    FOREIGN KEY (`team_id`)
    REFERENCES `baseball_db`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`game` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`game` (
                                                    `id` INT NOT NULL,
                                                    `home_id` INT NOT NULL,
                                                    `away_id` INT NOT NULL,
                                                    PRIMARY KEY (`id`),
    INDEX `fk_game_team1_idx` (`home_id` ASC) VISIBLE,
    INDEX `fk_game_team2_idx` (`away_id` ASC) VISIBLE,
    CONSTRAINT `fk_game_team1`
    FOREIGN KEY (`home_id`)
    REFERENCES `baseball_db`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_game_team2`
    FOREIGN KEY (`away_id`)
    REFERENCES `baseball_db`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`player_score`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`player_score` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`player_score` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `at_bats` INT UNSIGNED NOT NULL,
                                                            `hits` INT UNSIGNED NOT NULL,
                                                            `outs` INT UNSIGNED NOT NULL,
                                                            `player_id` INT NOT NULL,
                                                            `game_id` INT NOT NULL,
                                                            `four_balls` INT NOT NULL,
                                                            PRIMARY KEY (`id`),
    INDEX `fk_member_score_member1_idx` (`player_id` ASC) VISIBLE,
    INDEX `fk_member_score_game1_idx` (`game_id` ASC) VISIBLE,
    CONSTRAINT `fk_member_score_member1`
    FOREIGN KEY (`player_id`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_member_score_game1`
    FOREIGN KEY (`game_id`)
    REFERENCES `baseball_db`.`game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`inning`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`inning` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`inning` (
                                                      `id` INT NOT NULL AUTO_INCREMENT,
                                                      `inning_number` INT UNSIGNED NOT NULL,
                                                      `score` INT UNSIGNED NOT NULL,
                                                      `inning_half` TINYINT UNSIGNED NOT NULL,
                                                      `base_one` INT NOT NULL,
                                                      `base_two` INT NOT NULL,
                                                      `base_three` INT NOT NULL,
                                                      `game_id` INT NOT NULL,
                                                      `pitcher` INT NOT NULL,
                                                      PRIMARY KEY (`id`),
    INDEX `fk_inning_player1_idx` (`base_one` ASC) VISIBLE,
    INDEX `fk_inning_player2_idx` (`base_two` ASC) VISIBLE,
    INDEX `fk_inning_player3_idx` (`base_three` ASC) VISIBLE,
    INDEX `fk_inning_game1_idx` (`game_id` ASC) VISIBLE,
    INDEX `fk_inning_player4_idx` (`pitcher` ASC) VISIBLE,
    CONSTRAINT `fk_inning_player1`
    FOREIGN KEY (`base_one`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_inning_player2`
    FOREIGN KEY (`base_two`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_inning_player3`
    FOREIGN KEY (`base_three`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_inning_game1`
    FOREIGN KEY (`game_id`)
    REFERENCES `baseball_db`.`game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_inning_player4`
    FOREIGN KEY (`pitcher`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`play_history`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`play_history` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`play_history` (
                                                            `id` INT NOT NULL AUTO_INCREMENT,
                                                            `batter` INT NOT NULL,
                                                            `inning_id` INT NOT NULL,
                                                            `result` CHAR(1) NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_play_member1_idx` (`batter` ASC) VISIBLE,
    INDEX `fk_play_history_inning1_idx` (`inning_id` ASC) VISIBLE,
    CONSTRAINT `fk_play_member1`
    FOREIGN KEY (`batter`)
    REFERENCES `baseball_db`.`player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_play_history_inning1`
    FOREIGN KEY (`inning_id`)
    REFERENCES `baseball_db`.`inning` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`user` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`user` (
                                                    `id` INT NOT NULL AUTO_INCREMENT,
                                                    `user_id` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `baseball_db`.`user_selected`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `baseball_db`.`user_selected` ;

CREATE TABLE IF NOT EXISTS `baseball_db`.`user_selected` (
                                                             `user_id` INT NOT NULL,
                                                             `team_id` INT NOT NULL,
                                                             PRIMARY KEY (`user_id`, `team_id`),
    INDEX `fk_user_prefer_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_user_prefer_team1_idx` (`team_id` ASC) VISIBLE,
    CONSTRAINT `fk_user_prefer_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `baseball_db`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_user_prefer_team1`
    FOREIGN KEY (`team_id`)
    REFERENCES `baseball_db`.`team` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
