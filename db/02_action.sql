CREATE TABLE `action` (
  `user_id` varchar(36) NOT NULL,
  target_user_id varchar(36) NOT NULL,
  `action` int NOT NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;
