# Estrutura do Banco de Dados

## Tabelas Principais

### users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  avatar_url VARCHAR(255),
  user_type ENUM('passenger', 'driver') NOT NULL,
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 5.00,
  total_ratings INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### driver_documents
```sql
CREATE TABLE driver_documents (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  document_type VARCHAR(50) NOT NULL,
  document_url VARCHAR(255),
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  rejection_reason VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### rides
```sql
CREATE TABLE rides (
  id UUID PRIMARY KEY,
  passenger_id UUID NOT NULL,
  driver_id UUID,
  status ENUM('pending', 'accepted', 'started', 'completed', 'cancelled') DEFAULT 'pending',
  pickup_location POINT NOT NULL,
  pickup_address VARCHAR(255),
  dropoff_location POINT NOT NULL,
  dropoff_address VARCHAR(255),
  scheduled_time TIMESTAMP,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  distance_km DECIMAL(8,2),
  duration_minutes INT,
  estimated_fare DECIMAL(10,2),
  final_fare DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (passenger_id) REFERENCES users(id),
  FOREIGN KEY (driver_id) REFERENCES users(id)
);
```

### payments
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY,
  ride_id UUID NOT NULL,
  user_id UUID NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  transaction_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ride_id) REFERENCES rides(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### messages
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  ride_id UUID NOT NULL,
  sender_id UUID NOT NULL,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ride_id) REFERENCES rides(id),
  FOREIGN KEY (sender_id) REFERENCES users(id)
);
```

### ratings
```sql
CREATE TABLE ratings (
  id UUID PRIMARY KEY,
  ride_id UUID NOT NULL,
  rater_id UUID NOT NULL,
  rated_user_id UUID NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ride_id) REFERENCES rides(id),
  FOREIGN KEY (rater_id) REFERENCES users(id),
  FOREIGN KEY (rated_user_id) REFERENCES users(id)
);
```

## Índices Importantes

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_rides_passenger ON rides(passenger_id);
CREATE INDEX idx_rides_driver ON rides(driver_id);
CREATE INDEX idx_rides_status ON rides(status);
CREATE INDEX idx_payments_user ON payments(user_id);
CREATE INDEX idx_messages_ride ON messages(ride_id);
CREATE INDEX idx_ratings_user ON ratings(rated_user_id);
```
