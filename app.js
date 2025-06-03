// Verbesserte Mario-Spiel Implementierung mit korrigierten Physik-Werten
// und authentischen 8-bit Assets

// Game data aus JSON mit verbesserten Werten
const gameData = {
  "levels": [
    {
      "id": 1,
      "name": "Level 1 - Einsteiger",
      "difficulty": "easy",
      "backgroundColor": "#5DADE2", // Hellblauer Himmel
      "platforms": [
        {"x": 0, "y": 550, "width": 800, "height": 50, "type": "ground"},
        {"x": 200, "y": 450, "width": 80, "height": 20, "type": "normal"},
        {"x": 350, "y": 380, "width": 60, "height": 20, "type": "normal"},
        {"x": 450, "y": 350, "width": 150, "height": 20, "type": "normal"},
        {"x": 650, "y": 280, "width": 100, "height": 20, "type": "normal"},
        {"x": 780, "y": 350, "width": 150, "height": 20, "type": "normal"},
        {"x": 900, "y": 450, "width": 200, "height": 50, "type": "ground"},
        {"x": 1200, "y": 550, "width": 300, "height": 50, "type": "ground"}
      ],
      "blocks": [
        {"x": 250, "y": 350, "type": "question", "content": "mushroom"},
        {"x": 500, "y": 250, "type": "brick", "content": "coin"},
        {"x": 530, "y": 250, "type": "brick", "content": "coin"},
        {"x": 560, "y": 250, "type": "brick", "content": "empty"},
        {"x": 700, "y": 180, "type": "question", "content": "fireFlower"},
        {"x": 950, "y": 350, "type": "question", "content": "coin"}
      ],
      "pipes": [
        {"x": 600, "y": 510, "height": 40},
        {"x": 1050, "y": 510, "height": 40}
      ],
      "enemies": [
        {"x": 380, "y": 530, "type": "goomba"},
        {"x": 500, "y": 330, "type": "koopa"},
        {"x": 800, "y": 330, "type": "boo"},
        {"x": 950, "y": 430, "type": "goomba"}
      ],
      "coins": [
        {"x": 250, "y": 400},
        {"x": 450, "y": 300},
        {"x": 650, "y": 230},
        {"x": 750, "y": 250},
        {"x": 850, "y": 300},
        {"x": 950, "y": 400}
      ],
      "goal": {"x": 1350, "y": 480}
    },
    {
      "id": 2,
      "name": "Level 2 - Fortgeschritten",
      "difficulty": "medium",
      "backgroundColor": "#48C9B0", // Türkis
      "platforms": [
        {"x": 0, "y": 550, "width": 300, "height": 50, "type": "ground"},
        {"x": 350, "y": 500, "width": 100, "height": 20, "type": "normal"},
        {"x": 500, "y": 450, "width": 100, "height": 20, "type": "normal"},
        {"x": 650, "y": 400, "width": 100, "height": 20, "type": "normal"},
        {"x": 800, "y": 350, "width": 100, "height": 20, "type": "normal"},
        {"x": 950, "y": 400, "width": 100, "height": 20, "type": "normal"},
        {"x": 1100, "y": 450, "width": 100, "height": 20, "type": "normal"},
        {"x": 1250, "y": 500, "width": 100, "height": 20, "type": "normal"},
        {"x": 1400, "y": 550, "width": 300, "height": 50, "type": "ground"}
      ],
      "blocks": [
        {"x": 380, "y": 400, "type": "question", "content": "mushroom"},
        {"x": 410, "y": 400, "type": "brick", "content": "coin"},
        {"x": 440, "y": 400, "type": "brick", "content": "star"},
        {"x": 470, "y": 400, "type": "question", "content": "coin"},
        {"x": 680, "y": 300, "type": "question", "content": "fireFlower"},
        {"x": 850, "y": 250, "type": "brick", "content": "1up"},
        {"x": 1150, "y": 350, "type": "question", "content": "coin"}
      ],
      "pipes": [
        {"x": 200, "y": 510, "height": 40},
        {"x": 600, "y": 410, "height": 40},
        {"x": 1000, "y": 410, "height": 40},
        {"x": 1350, "y": 510, "height": 40}
      ],
      "enemies": [
        {"x": 150, "y": 530, "type": "goomba"},
        {"x": 380, "y": 480, "type": "koopa"},
        {"x": 700, "y": 380, "type": "boo"},
        {"x": 850, "y": 330, "type": "boo"},
        {"x": 1000, "y": 380, "type": "koopa"},
        {"x": 1300, "y": 480, "type": "goomba"}
      ],
      "coins": [
        {"x": 450, "y": 400},
        {"x": 600, "y": 350},
        {"x": 750, "y": 300},
        {"x": 900, "y": 250},
        {"x": 1050, "y": 300},
        {"x": 1200, "y": 350},
        {"x": 1350, "y": 400}
      ],
      "goal": {"x": 1600, "y": 480}
    },
    {
      "id": 3,
      "name": "Level 3 - Experte",
      "difficulty": "hard",
      "backgroundColor": "#5D6D7E", // Dunkelblau
      "platforms": [
        {"x": 0, "y": 550, "width": 200, "height": 50, "type": "ground"},
        {"x": 300, "y": 500, "width": 60, "height": 20, "type": "normal"},
        {"x": 400, "y": 450, "width": 60, "height": 20, "type": "normal"},
        {"x": 500, "y": 400, "width": 60, "height": 20, "type": "normal"},
        {"x": 600, "y": 350, "width": 60, "height": 20, "type": "normal"},
        {"x": 700, "y": 300, "width": 60, "height": 20, "type": "normal"},
        {"x": 800, "y": 250, "width": 60, "height": 20, "type": "normal"},
        {"x": 900, "y": 300, "width": 60, "height": 20, "type": "normal"},
        {"x": 1000, "y": 350, "width": 60, "height": 20, "type": "normal"},
        {"x": 1100, "y": 400, "width": 60, "height": 20, "type": "normal"},
        {"x": 1200, "y": 450, "width": 60, "height": 20, "type": "normal"},
        {"x": 1300, "y": 500, "width": 60, "height": 20, "type": "normal"},
        {"x": 1400, "y": 550, "width": 250, "height": 50, "type": "ground"}
      ],
      "blocks": [
        {"x": 330, "y": 400, "type": "question", "content": "mushroom"},
        {"x": 430, "y": 350, "type": "brick", "content": "coin"},
        {"x": 530, "y": 300, "type": "question", "content": "star"},
        {"x": 630, "y": 250, "type": "brick", "content": "coin"},
        {"x": 730, "y": 200, "type": "question", "content": "fireFlower"},
        {"x": 830, "y": 150, "type": "brick", "content": "1up"},
        {"x": 930, "y": 200, "type": "question", "content": "coin"},
        {"x": 1030, "y": 250, "type": "brick", "content": "empty"},
        {"x": 1130, "y": 300, "type": "question", "content": "mushroom"},
        {"x": 1230, "y": 350, "type": "brick", "content": "coin"}
      ],
      "pipes": [
        {"x": 150, "y": 510, "height": 40},
        {"x": 450, "y": 360, "height": 40},
        {"x": 750, "y": 210, "height": 40},
        {"x": 1050, "y": 310, "height": 40},
        {"x": 1350, "y": 510, "height": 40}
      ],
      "enemies": [
        {"x": 100, "y": 530, "type": "goomba"},
        {"x": 350, "y": 480, "type": "boo"},
        {"x": 450, "y": 430, "type": "koopa"},
        {"x": 550, "y": 380, "type": "goomba"},
        {"x": 650, "y": 330, "type": "boo"},
        {"x": 750, "y": 280, "type": "koopa"},
        {"x": 850, "y": 230, "type": "goomba"},
        {"x": 950, "y": 280, "type": "boo"},
        {"x": 1050, "y": 330, "type": "koopa"},
        {"x": 1150, "y": 380, "type": "goomba"},
        {"x": 1250, "y": 430, "type": "boo"},
        {"x": 1350, "y": 480, "type": "koopa"}
      ],
      "coins": [
        {"x": 350, "y": 450},
        {"x": 450, "y": 400},
        {"x": 550, "y": 350},
        {"x": 650, "y": 300},
        {"x": 750, "y": 250},
        {"x": 850, "y": 200},
        {"x": 950, "y": 250},
        {"x": 1050, "y": 300},
        {"x": 1150, "y": 350},
        {"x": 1250, "y": 400},
        {"x": 1350, "y": 450}
      ],
      "goal": {"x": 1550, "y": 480}
    }
  ],
  // Korrigierte Physik-Werte gemäß Anforderungen
  "gameSettings": {
    "playerSpeed": 2.0,
    "jumpPower": 20,
    "gravity": 1.2,
    "acceleration": 1.0,
    "friction": 0.6,
    "playerLives": 3,
    "coinValue": 100,
    "coyoteTime": 150, // ms für Coyote Time (Sprung kurz nach Kante)
    "jumpCutMultiplier": 0.5, // Faktor für Sprungabbruch
    "booHidingDistance": 150 // Pixel-Entfernung in der Boos sich verstecken
  }
};

// Spiel-Klassen mit verbesserten Mechaniken
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.velocityX = 0;
    this.velocityY = 0;
    this.maxVelocityX = gameData.gameSettings.playerSpeed;
    this.grounded = false;
    this.jumpPower = gameData.gameSettings.jumpPower;
    this.acceleration = gameData.gameSettings.acceleration;
    this.friction = gameData.gameSettings.friction;
    this.direction = 1; // 1 = rechts, -1 = links
    this.jumping = false;
    this.jumpTime = 0;
    this.coyoteTimer = 0;
    this.wasGrounded = false;
    this.state = "small"; // small, super, fire
    this.invincible = false;
    this.invincibleTimer = 0;
    this.starPower = false;
    this.starPowerTimer = 0;
    this.lives = gameData.gameSettings.playerLives;
    this.hit = false;
    this.hitTimer = 0;
    this.fireballs = [];
    this.sprite = { // Einfache Animation mit 2 Frames
      stand: { x: 0, y: 0 },
      run1: { x: 32, y: 0 },
      run2: { x: 64, y: 0 },
      jump: { x: 96, y: 0 }
    };
    this.currentFrame = 'stand';
    this.animationTimer = 0;
    this.animationDelay = 8; // Frames zwischen Animation-Updates
  }

  update(platforms, blocks, delta) {
    // Animation Update
    this.animationTimer++;
    if (this.animationTimer >= this.animationDelay) {
      this.animationTimer = 0;
      if (Math.abs(this.velocityX) > 0.5) {
        this.currentFrame = this.currentFrame === 'run1' ? 'run2' : 'run1';
      } else {
        this.currentFrame = 'stand';
      }
    }
    
    if (!this.grounded) {
      this.currentFrame = 'jump';
    }

    // Beschleunigung und Verzögerung für sanftere Bewegung
    if (game.keys['KeyA'] || game.keys['ArrowLeft']) {
      this.velocityX -= this.acceleration;
      this.direction = -1;
    } else if (game.keys['KeyD'] || game.keys['ArrowRight']) {
      this.velocityX += this.acceleration;
      this.direction = 1;
    } else {
      // Sanft stoppen mit Reibung
      this.velocityX *= this.friction;
    }
    
    // Geschwindigkeitsbegrenzung
    if (this.velocityX > this.maxVelocityX) this.velocityX = this.maxVelocityX;
    if (this.velocityX < -this.maxVelocityX) this.velocityX = -this.maxVelocityX;
    
    // Wenn die Geschwindigkeit sehr niedrig ist, auf 0 setzen (verhindert Micro-Bewegungen)
    if (Math.abs(this.velocityX) < 0.1) this.velocityX = 0;
    
    // Anwenden der Schwerkraft
    this.velocityY += gameData.gameSettings.gravity;
    
    // Variable Sprunghöhe (kurz/lang je nach Tastendruck)
    if ((game.keys['KeyW'] || game.keys['ArrowUp'] || game.keys['Space'])) {
      // Wenn wir springen und die Taste noch gedrückt ist, halten wir die Aufwärtsbewegung länger
      if (this.jumping && this.velocityY < 0) {
        this.jumpTime++;
        // Maximale Sprungzeit limitieren
        if (this.jumpTime > 15) {
          this.jumping = false;
        }
      }
    } else {
      // Wenn die Taste losgelassen wird während wir aufsteigen, reduzieren wir die Aufwärtsgeschwindigkeit
      // für variable Sprunghöhe
      if (this.velocityY < 0) {
        this.velocityY *= gameData.gameSettings.jumpCutMultiplier;
      }
      this.jumping = false;
    }

    // Position aktualisieren
    this.x += this.velocityX;
    this.y += this.velocityY;
    
    // Vorherigen Bodenkontakt speichern für Coyote Time
    this.wasGrounded = this.grounded;
    
    // Zurücksetzen des Bodenkontakts
    this.grounded = false;
    
    // Kollision mit Plattformen
    for (let platform of platforms) {
      if (this.x < platform.x + platform.width &&
          this.x + this.width > platform.x &&
          this.y < platform.y + platform.height &&
          this.y + this.height > platform.y) {
        
        // Auf Plattform landen
        if (this.velocityY > 0 && this.y + this.height < platform.y + platform.height / 2) {
          this.y = platform.y - this.height;
          this.velocityY = 0;
          this.grounded = true;
          this.jumping = false;
          this.jumpTime = 0;
        }
        // Von unten gegen Plattform stoßen
        else if (this.velocityY < 0 && this.y > platform.y + platform.height / 2) {
          this.y = platform.y + platform.height;
          this.velocityY = 0;
        }
        // Seitliche Kollision
        else if (this.velocityX > 0 && this.x < platform.x) {
          this.x = platform.x - this.width;
          this.velocityX = 0;
        }
        else if (this.velocityX < 0 && this.x > platform.x) {
          this.x = platform.x + platform.width;
          this.velocityX = 0;
        }
      }
    }

    // Kollision mit Blöcken
    for (let block of blocks) {
      if (!block.hit && 
          this.x < block.x + block.width &&
          this.x + this.width > block.x &&
          this.y < block.y + block.height &&
          this.y + this.height > block.y) {
        
        // Von unten gegen Block stoßen
        if (this.velocityY < 0 && this.y > block.y + block.height / 2) {
          this.y = block.y + block.height;
          this.velocityY = 0;
          
          // Block Interaktion
          if (block.type === 'question' || block.type === 'brick') {
            block.hit = true;
            block.hitAnimation = 0;
            
            // Power-up oder Münze erzeugen
            if (block.content === 'coin') {
              game.score += gameData.gameSettings.coinValue;
              game.createFloatingText(block.x + block.width/2, block.y - 20, `+${gameData.gameSettings.coinValue}`, '#FFD700');
              game.coinCount++;
            } else if (block.content === 'mushroom') {
              game.powerups.push(new PowerUp(block.x, block.y - 32, 'mushroom'));
            } else if (block.content === 'fireFlower') {
              game.powerups.push(new PowerUp(block.x, block.y - 32, 'fireFlower'));
            } else if (block.content === '1up') {
              game.powerups.push(new PowerUp(block.x, block.y - 32, '1up'));
            } else if (block.content === 'star') {
              game.powerups.push(new PowerUp(block.x, block.y - 32, 'star'));
            }
          }
        }
        // Auf Block landen
        else if (this.velocityY > 0 && this.y + this.height < block.y + block.height / 2) {
          this.y = block.y - this.height;
          this.velocityY = 0;
          this.grounded = true;
          this.jumping = false;
          this.jumpTime = 0;
        }
        // Seitliche Kollision
        else if (this.velocityX > 0 && this.x < block.x) {
          this.x = block.x - this.width;
          this.velocityX = 0;
        }
        else if (this.velocityX < 0 && this.x > block.x) {
          this.x = block.x + block.width;
          this.velocityX = 0;
        }
      }
    }
    
    // Coyote Time - erlaubt kurzes Springen nach Verlassen einer Plattform
    if (this.wasGrounded && !this.grounded) {
      this.coyoteTimer = gameData.gameSettings.coyoteTime;
    } else if (!this.grounded) {
      this.coyoteTimer -= delta;
    }
    
    // Spieler auf dem Bildschirm halten (horizontal)
    if (this.x < 0) this.x = 0;
    
    // Invincibility timer
    if (this.invincible) {
      this.invincibleTimer -= delta;
      if (this.invincibleTimer <= 0) {
        this.invincible = false;
      }
    }
    
    // Star power timer
    if (this.starPower) {
      this.starPowerTimer -= delta;
      if (this.starPowerTimer <= 0) {
        this.starPower = false;
      }
    }
    
    // Hit timer
    if (this.hit) {
      this.hitTimer -= delta;
      if (this.hitTimer <= 0) {
        this.hit = false;
      }
    }
    
    // Feuerbälle aktualisieren
    for (let i = this.fireballs.length - 1; i >= 0; i--) {
      this.fireballs[i].update(platforms, blocks);
      
      // Feuerball entfernen wenn er zu weit fliegt oder mit etwas kollidiert
      if (this.fireballs[i].toRemove) {
        this.fireballs.splice(i, 1);
      }
    }
  }

  draw(ctx, camera) {
    ctx.save();
    
    // Hitbox nur im Debug-Modus zeichnen
    if (game.debug) {
      ctx.strokeStyle = 'red';
      ctx.strokeRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }

    // Blinken bei Unverwundbarkeit
    if ((this.invincible || this.starPower) && Math.floor(Date.now() / 100) % 2 === 0) {
      ctx.globalAlpha = 0.5;
    }
    
    // Spielercharakter zeichnen (Mario im 8-bit Stil)
    ctx.translate(this.x - camera.x + this.width/2, this.y - camera.y + this.height/2);
    if (this.direction === -1) {
      ctx.scale(-1, 1); // Spiegeln wenn nach links schauend
    }
    
    // Höhe basierend auf Status (Super/Fire Mario ist höher)
    let playerHeight = this.state === "small" ? this.height : this.height * 2;
    let yOffset = this.state === "small" ? 0 : -this.height;
    
    // Zeichne Mario je nach Zustand
    if (this.state === "small") {
      // Kopf (rote Mütze)
      ctx.fillStyle = '#FF0000'; // Rot
      ctx.fillRect(-this.width/2, -this.height/2 + yOffset, this.width, this.height/2);
      
      // Gesicht
      ctx.fillStyle = '#FFCC99'; // Hautfarbe
      ctx.fillRect(-this.width/4, -this.height/4 + yOffset, this.width/2, this.height/4);
      
      // Augen
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, -this.height/4 + yOffset, this.width/8, this.width/8);
      
      // Overalls
      ctx.fillStyle = '#0000FF'; // Blau
      ctx.fillRect(-this.width/2, 0 + yOffset, this.width, this.height/2);
      
      // Arme und Beine (Hautfarbe)
      ctx.fillStyle = '#FFCC99';
      ctx.fillRect(-this.width/2, this.height/4 + yOffset, this.width/4, this.height/4);
      ctx.fillRect(this.width/4, this.height/4 + yOffset, this.width/4, this.height/4);
    } else {
      // Super/Fire Mario (größer)
      // Kopf (rote Mütze)
      ctx.fillStyle = this.state === "fire" ? '#FF0000' : '#FF0000'; // Rot
      ctx.fillRect(-this.width/2, -this.height + yOffset, this.width, this.height/2);
      
      // Gesicht
      ctx.fillStyle = '#FFCC99'; // Hautfarbe
      ctx.fillRect(-this.width/4, -this.height*3/4 + yOffset, this.width/2, this.height/4);
      
      // Augen
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, -this.height*3/4 + yOffset, this.width/8, this.width/8);
      
      // Oberkörper/Shirt
      ctx.fillStyle = this.state === "fire" ? '#FFFFFF' : '#FF0000'; // Weiß für Fire, Rot für Super
      ctx.fillRect(-this.width/2, -this.height/2 + yOffset, this.width, this.height/2);
      
      // Overalls
      ctx.fillStyle = '#0000FF'; // Blau
      ctx.fillRect(-this.width/2, 0 + yOffset, this.width, this.height);
      
      // Arme und Beine (Hautfarbe)
      ctx.fillStyle = '#FFCC99';
      ctx.fillRect(-this.width/2, this.height/2 + yOffset, this.width/4, this.height/2);
      ctx.fillRect(this.width/4, this.height/2 + yOffset, this.width/4, this.height/2);
    }
    
    ctx.restore();
    
    // Feuerbälle zeichnen
    for (let fireball of this.fireballs) {
      fireball.draw(ctx, camera);
    }
  }

  jump() {
    // Normaler Sprung oder Coyote Time Sprung
    if (this.grounded || this.coyoteTimer > 0) {
      this.velocityY = -this.jumpPower;
      this.grounded = false;
      this.jumping = true;
      this.jumpTime = 0;
      this.coyoteTimer = 0;
    }
  }

  shootFireball() {
    if (this.state === "fire" && this.fireballs.length < 2) {
      const fireballX = this.direction > 0 ? this.x + this.width : this.x;
      this.fireballs.push(new Fireball(fireballX, this.y + this.height/4, this.direction));
    }
  }

  takeDamage() {
    if (!this.invincible && !this.starPower) {
      if (this.state === "small") {
        this.die();
      } else {
        // Downgrade von Super/Fire zu Small
        this.state = "small";
        this.invincible = true;
        this.invincibleTimer = 3000; // 3 Sekunden Unverwundbarkeit
        this.hit = true;
        this.hitTimer = 1000; // 1 Sekunde Blinkeffekt
      }
    }
  }

  die() {
    if (!this.invincible && !this.starPower) {
      this.lives--;
      if (this.lives <= 0) {
        game.gameOver();
      } else {
        // Respawn am Anfang des Levels
        game.respawnPlayer();
      }
    }
  }

  powerUp(type) {
    switch (type) {
      case 'mushroom':
        if (this.state === "small") {
          this.state = "super";
          game.showPowerupText("Super Mario!");
        }
        break;
      case 'fireFlower':
        this.state = "fire";
        game.showPowerupText("Fire Mario!");
        break;
      case '1up':
        this.lives++;
        game.showPowerupText("1-Up!");
        break;
      case 'star':
        this.starPower = true;
        this.starPowerTimer = 10000; // 10 Sekunden Sternenkraft
        game.showPowerupText("Starman!");
        break;
    }
  }
}

class Enemy {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.type = type;
    this.velocityX = type === 'goomba' ? -1 : (type === 'koopa' ? -0.8 : -0.5);
    this.velocityY = 0;
    this.alive = true;
    this.direction = -1; // -1 = links, 1 = rechts
    this.animationFrame = 0;
    this.animationCounter = 0;
    this.hiding = false; // Für Boo-Verhalten
    this.visible = type === 'boo' ? 1.0 : 1.0; // Transparenz für Boos
  }

  update(platforms, blocks, player) {
    if (!this.alive) return;
    
    // Boo spezielles Verhalten - verstecken wenn Mario in ihre Richtung schaut
    if (this.type === 'boo') {
      const distanceToPlayer = Math.abs(this.x - player.x);
      const playerLookingAtBoo = (player.x < this.x && player.direction === 1) || 
                                (player.x > this.x && player.direction === -1);
      
      // Boo versteckt sich, wenn Mario in ihre Richtung schaut und nahe genug ist
      if (playerLookingAtBoo && distanceToPlayer < gameData.gameSettings.booHidingDistance) {
        this.hiding = true;
        this.visible = Math.max(0.3, this.visible - 0.05); // Langsam ausblenden
        this.velocityX = 0; // Bewegung stoppen
      } else {
        this.hiding = false;
        this.visible = Math.min(1.0, this.visible + 0.03); // Langsam einblenden
        
        // Boo bewegt sich auf den Spieler zu, wenn er nicht hinschaut
        if (player.x < this.x) {
          this.velocityX = -0.7;
          this.direction = -1;
        } else {
          this.velocityX = 0.7;
          this.direction = 1;
        }
      }
    } else {
      // Schwerkraft für Goombas und Koopas
      this.velocityY += gameData.gameSettings.gravity;
    }
    
    // Position aktualisieren
    this.x += this.velocityX;
    this.y += this.velocityY;
    
    // Animation
    this.animationCounter++;
    if (this.animationCounter >= 10) {
      this.animationCounter = 0;
      this.animationFrame = (this.animationFrame + 1) % 2;
    }
    
    // Nur Goombas und Koopas haben Plattformkollision und Richtungswechsel
    if (this.type !== 'boo') {
      let onPlatform = false;
      
      // Plattformkollision
      for (let platform of platforms) {
        if (this.x < platform.x + platform.width &&
            this.x + this.width > platform.x &&
            this.y < platform.y + platform.height &&
            this.y + this.height > platform.y) {
          
          // Auf Plattform landen
          if (this.velocityY > 0 && this.y + this.height < platform.y + platform.height/2) {
            this.y = platform.y - this.height;
            this.velocityY = 0;
            onPlatform = true;
          }
          // Von unten gegen Plattform stoßen
          else if (this.velocityY < 0 && this.y > platform.y + platform.height/2) {
            this.y = platform.y + platform.height;
            this.velocityY = 0;
          }
          // Seitliche Kollision - Richtungswechsel
          else if (this.velocityX > 0 && this.x < platform.x) {
            this.x = platform.x - this.width;
            this.direction = -1;
            this.velocityX = -Math.abs(this.velocityX);
          }
          else if (this.velocityX < 0 && this.x > platform.x) {
            this.x = platform.x + platform.width;
            this.direction = 1;
            this.velocityX = Math.abs(this.velocityX);
          }
        }
      }
      
      // Blockkollision
      for (let block of blocks) {
        if (!block.hit && 
            this.x < block.x + block.width &&
            this.x + this.width > block.x &&
            this.y < block.y + block.height &&
            this.y + this.height > block.y) {
          
          // Auf Block landen
          if (this.velocityY > 0 && this.y + this.height < block.y + block.height/2) {
            this.y = block.y - this.height;
            this.velocityY = 0;
            onPlatform = true;
          }
          // Von unten gegen Block stoßen
          else if (this.velocityY < 0 && this.y > block.y + block.height/2) {
            this.y = block.y + block.height;
            this.velocityY = 0;
          }
          // Seitliche Kollision - Richtungswechsel
          else if (this.velocityX > 0 && this.x < block.x) {
            this.x = block.x - this.width;
            this.direction = -1;
            this.velocityX = -Math.abs(this.velocityX);
          }
          else if (this.velocityX < 0 && this.x > block.x) {
            this.x = block.x + block.width;
            this.direction = 1;
            this.velocityX = Math.abs(this.velocityX);
          }
        }
      }
      
      // Umdrehen an Plattformkanten
      if (onPlatform) {
        let aboutToFall = true;
        // Prüfen ob ein Boden vor dem Gegner ist
        for (let platform of [...platforms, ...blocks.filter(b => !b.hit)]) {
          const nextX = this.direction > 0 ? this.x + this.width + 2 : this.x - 2;
          
          if (nextX + (this.direction > 0 ? 0 : this.width) >= platform.x && 
              nextX + (this.direction > 0 ? 0 : this.width) <= platform.x + platform.width &&
              Math.abs((this.y + this.height) - platform.y) < 5) {
            aboutToFall = false;
            break;
          }
        }
        
        if (aboutToFall) {
          this.direction *= -1;
          this.velocityX *= -1;
        }
      }
    }
  }

  draw(ctx, camera) {
    if (!this.alive) return;
    
    ctx.save();
    
    // Hitbox nur im Debug-Modus zeichnen
    if (game.debug) {
      ctx.strokeStyle = 'red';
      ctx.strokeRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }
    
    // Transparenz für Boos
    ctx.globalAlpha = this.visible;
    
    switch(this.type) {
      case 'goomba':
        // Goomba (braun mit schwarzen Augen)
        ctx.fillStyle = '#8B4513'; // Braun
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
        
        // Augen
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 8, 4, 4);
        ctx.fillRect(this.x - camera.x + 20, this.y - camera.y + 8, 4, 4);
        
        // Füße
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.x - camera.x + 4, this.y - camera.y + 24, 8, 8);
        ctx.fillRect(this.x - camera.x + 20, this.y - camera.y + 24, 8, 8);
        break;
        
      case 'koopa':
        // Koopa (grün mit gelbem Bauch)
        // Panzer
        ctx.fillStyle = '#228B22'; // Grün
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
        
        // Bauch
        ctx.fillStyle = '#FFFF00'; // Gelb
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 8, 16, 16);
        
        // Augen
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.x - camera.x + (this.direction > 0 ? 22 : 6), this.y - camera.y + 6, 4, 4);
        break;
        
      case 'boo':
        // Boo (weiß mit schwarzen Augen und rotem Mund)
        // Körper
        ctx.fillStyle = '#FFFFFF';
        // Runder Körper
        ctx.beginPath();
        ctx.arc(this.x - camera.x + this.width/2, this.y - camera.y + this.height/2, 
                this.width/2, 0, Math.PI * 2);
        ctx.fill();
        
        if (!this.hiding) {
          // Augen
          ctx.fillStyle = '#000000';
          ctx.beginPath();
          ctx.arc(this.x - camera.x + (this.direction > 0 ? 22 : 10), 
                  this.y - camera.y + 12, 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Mund
          ctx.fillStyle = '#FF0000';
          ctx.beginPath();
          ctx.arc(this.x - camera.x + this.width/2, this.y - camera.y + 22, 
                  6, 0, Math.PI);
          ctx.fill();
        } else {
          // Verstecktes Gesicht
          ctx.fillStyle = '#000000';
          ctx.beginPath();
          ctx.arc(this.x - camera.x + this.width/2, this.y - camera.y + this.height/2, 
                  3, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
    }
    
    ctx.restore();
  }
}

class PowerUp {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.type = type; // mushroom, fireFlower, 1up, star
    this.velocityX = 1;
    this.velocityY = 0;
    this.collected = false;
    this.direction = 1;
    this.animationFrame = 0;
    this.animationCounter = 0;
  }

  update(platforms, blocks) {
    if (this.collected) return;
    
    // Nur Pilze und Stern bewegen sich horizontal
    if (this.type === 'mushroom' || this.type === '1up' || this.type === 'star') {
      this.x += this.velocityX * this.direction;
      this.velocityY += gameData.gameSettings.gravity;
    }
    
    // Animation für Star und FireFlower
    if (this.type === 'star' || this.type === 'fireFlower') {
      this.animationCounter++;
      if (this.animationCounter >= 10) {
        this.animationCounter = 0;
        this.animationFrame = (this.animationFrame + 1) % 4;
      }
    }
    
    // Position aktualisieren
    this.y += this.velocityY;
    
    // Kollision mit Plattformen
    let onPlatform = false;
    for (let platform of platforms) {
      if (this.x < platform.x + platform.width &&
          this.x + this.width > platform.x &&
          this.y < platform.y + platform.height &&
          this.y + this.height > platform.y) {
        
        // Auf Plattform landen
        if (this.velocityY > 0 && this.y + this.height < platform.y + platform.height/2) {
          this.y = platform.y - this.height;
          this.velocityY = 0;
          onPlatform = true;
        }
        // Seitliche Kollision - Richtungswechsel
        else if (this.velocityX && this.direction > 0 && this.x < platform.x) {
          this.x = platform.x - this.width;
          this.direction = -1;
        }
        else if (this.velocityX && this.direction < 0 && this.x > platform.x) {
          this.x = platform.x + platform.width;
          this.direction = 1;
        }
      }
    }
    
    // Kollision mit Blöcken
    for (let block of blocks) {
      if (!block.hit && 
          this.x < block.x + block.width &&
          this.x + this.width > block.x &&
          this.y < block.y + block.height &&
          this.y + this.height > block.y) {
        
        // Auf Block landen
        if (this.velocityY > 0 && this.y + this.height < block.y + block.height/2) {
          this.y = block.y - this.height;
          this.velocityY = 0;
          onPlatform = true;
        }
        // Seitliche Kollision - Richtungswechsel
        else if (this.velocityX && this.direction > 0 && this.x < block.x) {
          this.x = block.x - this.width;
          this.direction = -1;
        }
        else if (this.velocityX && this.direction < 0 && this.x > block.x) {
          this.x = block.x + block.width;
          this.direction = 1;
        }
      }
    }
  }

  draw(ctx, camera) {
    if (this.collected) return;
    
    ctx.save();
    
    // Hitbox nur im Debug-Modus zeichnen
    if (game.debug) {
      ctx.strokeStyle = 'blue';
      ctx.strokeRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    }
    
    switch(this.type) {
      case 'mushroom':
        // Super Mushroom (rot mit weißen Punkten)
        ctx.fillStyle = '#FF0000'; // Rot
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
        
        // Stiel
        ctx.fillStyle = '#8B4513'; // Braun
        ctx.fillRect(this.x - camera.x + 12, this.y - camera.y - 4, 8, 8);
        
        // Punkte
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 8, 6, 6);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 8, 6, 6);
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 18, 6, 6);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 18, 6, 6);
        break;
        
      case 'fireFlower':
        // Fire Flower (rot-gelbe Blume)
        const colors = ['#FF0000', '#FFA500', '#FFFF00', '#FF0000'];
        
        // Blätter
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 16, 16, 16);
        
        // Blume
        ctx.fillStyle = colors[this.animationFrame];
        ctx.fillRect(this.x - camera.x + 4, this.y - camera.y + 4, 24, 12);
        ctx.fillRect(this.x - camera.x + 4, this.y - camera.y + 4, 8, 24);
        ctx.fillRect(this.x - camera.x + 20, this.y - camera.y + 4, 8, 24);
        
        // Mitte
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x - camera.x + 12, this.y - camera.y + 12, 8, 8);
        break;
        
      case '1up':
        // 1-Up Pilz (grün)
        ctx.fillStyle = '#00FF00'; // Grün
        ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
        
        // Stiel
        ctx.fillStyle = '#8B4513'; // Braun
        ctx.fillRect(this.x - camera.x + 12, this.y - camera.y - 4, 8, 8);
        
        // Punkte
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 8, 6, 6);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 8, 6, 6);
        ctx.fillRect(this.x - camera.x + 8, this.y - camera.y + 18, 6, 6);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 18, 6, 6);
        break;
        
      case 'star':
        // Stern (gelb und blinkend)
        ctx.fillStyle = this.animationFrame % 2 === 0 ? '#FFFF00' : '#FFA500';
        
        // Sternform
        ctx.beginPath();
        ctx.moveTo(this.x - camera.x + 16, this.y - camera.y);
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(this.x - camera.x + 16 + 16 * Math.cos((i * 2 + 1) * Math.PI / 5),
                    this.y - camera.y + 16 + 16 * Math.sin((i * 2 + 1) * Math.PI / 5));
          ctx.lineTo(this.x - camera.x + 16 + 8 * Math.cos((i * 2 + 2) * Math.PI / 5),
                    this.y - camera.y + 16 + 8 * Math.sin((i * 2 + 2) * Math.PI / 5));
        }
        ctx.closePath();
        ctx.fill();
        
        // Augen
        ctx.fillStyle = '#000000';
        ctx.fillRect(this.x - camera.x + 10, this.y - camera.y + 10, 4, 4);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 10, 4, 4);
        break;
    }
    
    ctx.restore();
  }
}

class Fireball {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.width = 12;
    this.height = 12;
    this.velocityX = direction * 6;
    this.velocityY = 0;
    this.direction = direction;
    this.bounceCount = 0;
    this.maxBounces = 5;
    this.toRemove = false;
    this.animationFrame = 0;
    this.animationCounter = 0;
  }

  update(platforms, blocks) {
    this.x += this.velocityX;
    this.velocityY += gameData.gameSettings.gravity * 0.5;
    this.y += this.velocityY;
    
    // Animation
    this.animationCounter++;
    if (this.animationCounter >= 4) {
      this.animationCounter = 0;
      this.animationFrame = (this.animationFrame + 1) % 4;
    }
    
    // Kollision mit Plattformen
    for (let platform of platforms) {
      if (this.x < platform.x + platform.width &&
          this.x + this.width > platform.x &&
          this.y < platform.y + platform.height &&
          this.y + this.height > platform.y) {
        
        // Vom Boden abprallen
        if (this.velocityY > 0 && this.y + this.height < platform.y + platform.height/2) {
          this.y = platform.y - this.height;
          this.velocityY = -4;
          this.bounceCount++;
          
          if (this.bounceCount >= this.maxBounces) {
            this.toRemove = true;
          }
        }
        // Seitliche Kollision - Verschwinden
        else if ((this.velocityX > 0 && this.x < platform.x) ||
                (this.velocityX < 0 && this.x > platform.x)) {
          this.toRemove = true;
        }
      }
    }
    
    // Kollision mit Blöcken
    for (let block of blocks) {
      if (!block.hit && 
          this.x < block.x + block.width &&
          this.x + this.width > block.x &&
          this.y < block.y + block.height &&
          this.y + this.height > block.y) {
        
        // Vom Boden abprallen
        if (this.velocityY > 0 && this.y + this.height < block.y + block.height/2) {
          this.y = block.y - this.height;
          this.velocityY = -4;
          this.bounceCount++;
          
          if (this.bounceCount >= this.maxBounces) {
            this.toRemove = true;
          }
        }
        // Seitliche Kollision - Verschwinden
        else if ((this.velocityX > 0 && this.x < block.x) ||
                (this.velocityX < 0 && this.x > block.x)) {
          this.toRemove = true;
        }
      }
    }
    
    // Außerhalb des Bildschirms entfernen
    if (this.x < -this.width || this.x > game.canvas.width + this.width) {
      this.toRemove = true;
    }
  }

  draw(ctx, camera) {
    // Fireball (rotierend mit Feuerfarben)
    const colors = ['#FF0000', '#FFA500', '#FFFF00', '#FFA500'];
    
    ctx.save();
    ctx.fillStyle = colors[this.animationFrame];
    ctx.beginPath();
    ctx.arc(this.x - camera.x + this.width/2, this.y - camera.y + this.height/2, 
            this.width/2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Coin {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 16;
    this.height = 16;
    this.collected = false;
    this.animationFrame = 0;
    this.animationCounter = 0;
  }

  update() {
    // Animation
    this.animationCounter++;
    if (this.animationCounter >= 8) {
      this.animationCounter = 0;
      this.animationFrame = (this.animationFrame + 1) % 4;
    }
  }

  draw(ctx, camera) {
    if (this.collected) return;
    
    // Münzen-Animation (drehende Münze)
    const widths = [16, 12, 4, 12]; // Verschiedene Breiten für Dreheffekt
    
    ctx.save();
    ctx.fillStyle = '#FFD700'; // Gold
    ctx.fillRect(this.x - camera.x + (this.width - widths[this.animationFrame])/2, 
                this.y - camera.y, widths[this.animationFrame], this.height);
    
    // Glanzeffekt
    ctx.fillStyle = '#FFA500'; // Orange
    ctx.fillRect(this.x - camera.x + (this.width - widths[this.animationFrame])/2 + 2, 
                this.y - camera.y + 2, widths[this.animationFrame] - 4, this.height - 4);
    ctx.restore();
  }
}

class Platform {
  constructor(x, y, width, height, type = "normal") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type; // normal, ground
  }

  draw(ctx, camera) {
    ctx.fillStyle = this.type === "ground" ? '#8B4513' : '#4ECDC4';
    ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    
    // Plattformdetails
    ctx.fillStyle = this.type === "ground" ? '#228B22' : '#2C3E50';
    ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, 4);
    
    if (this.type === "ground") {
      // Gras oben auf dem Boden
      ctx.fillStyle = '#32CD32';
      ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, 4);
      
      // Erdtextur im Boden
      for (let i = 0; i < this.width; i += 16) {
        for (let j = 8; j < this.height; j += 8) {
          if (Math.random() > 0.7) {
            ctx.fillStyle = '#654321';
            ctx.fillRect(this.x - camera.x + i, this.y - camera.y + j, 2, 2);
          }
        }
      }
    }
  }
}

class Block {
  constructor(x, y, type = "brick", content = "empty") {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.type = type; // brick, question
    this.content = content; // empty, coin, mushroom, fireFlower, 1up, star
    this.hit = false;
    this.hitAnimation = 0;
  }

  update() {
    if (this.hit && this.hitAnimation < 10) {
      this.hitAnimation++;
    }
  }

  draw(ctx, camera) {
    // Hitanimation
    const yOffset = this.hitAnimation > 0 ? Math.sin(this.hitAnimation * Math.PI / 10) * 8 : 0;
    
    ctx.save();
    
    if (this.type === "brick") {
      // Ziegelblock
      ctx.fillStyle = '#8B4513'; // Braun
      ctx.fillRect(this.x - camera.x, this.y - camera.y - yOffset, this.width, this.height);
      
      // Ziegel-Muster
      if (!this.hit || this.content !== "empty") {
        ctx.fillStyle = '#A52A2A'; // Dunkelrot
        ctx.fillRect(this.x - camera.x + 2, this.y - camera.y + 2 - yOffset, 
                    this.width - 4, this.height/2 - 4);
        ctx.fillRect(this.x - camera.x + 2, this.y - camera.y + this.height/2 + 2 - yOffset, 
                    this.width/2 - 4, this.height/2 - 4);
        ctx.fillRect(this.x - camera.x + this.width/2 + 2, this.y - camera.y + this.height/2 + 2 - yOffset, 
                    this.width/2 - 4, this.height/2 - 4);
      } else {
        // Getroffener leerer Block - zerbrochen aussehen lassen
        ctx.fillStyle = '#654321';
        for (let i = 0; i < this.width; i += 8) {
          for (let j = 0; j < this.height; j += 8) {
            if (Math.random() > 0.5) {
              ctx.fillRect(this.x - camera.x + i, this.y - camera.y + j - yOffset, 4, 4);
            }
          }
        }
      }
    } else if (this.type === "question") {
      // Fragezeichenblock
      ctx.fillStyle = this.hit ? '#A9A9A9' : '#FFD700'; // Grau wenn getroffen, sonst Gold
      ctx.fillRect(this.x - camera.x, this.y - camera.y - yOffset, this.width, this.height);
      
      // Fragezeichen, nur wenn nicht getroffen
      if (!this.hit) {
        ctx.fillStyle = '#8B4513';
        // Punkt
        ctx.fillRect(this.x - camera.x + 14, this.y - camera.y + 20 - yOffset, 4, 4);
        // Bogen
        ctx.fillRect(this.x - camera.x + 10, this.y - camera.y + 8 - yOffset, 12, 4);
        ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 12 - yOffset, 4, 4);
        ctx.fillRect(this.x - camera.x + 14, this.y - camera.y + 16 - yOffset, 4, 4);
      }
      
      // Animation für nicht-getroffene Blöcke
      if (!this.hit && Math.floor(Date.now() / 200) % 3 === 0) {
        ctx.fillStyle = '#FFA500'; // Orange Blinkeffekt
        ctx.fillRect(this.x - camera.x + 4, this.y - camera.y + 4 - yOffset, 
                    this.width - 8, this.height - 8);
      }
    }
    
    ctx.restore();
  }
}

class Pipe {
  constructor(x, y, height) {
    this.x = x;
    this.y = y;
    this.width = 64;
    this.height = height;
  }

  draw(ctx, camera) {
    // Rohr zeichnen
    ctx.fillStyle = '#228B22'; // Grün
    ctx.fillRect(this.x - camera.x, this.y - camera.y, this.width, this.height);
    
    // Rohröffnung
    ctx.fillStyle = '#000000'; // Schwarz
    ctx.fillRect(this.x - camera.x + 8, this.y - camera.y, this.width - 16, 8);
    
    // Rohrdetails
    ctx.fillStyle = '#32CD32'; // Hellgrün
    ctx.fillRect(this.x - camera.x + 4, this.y - camera.y, 4, this.height);
    ctx.fillRect(this.x - camera.x + 16, this.y - camera.y, 4, this.height);
  }
}

class FloatingText {
  constructor(x, y, text, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
    this.alpha = 1.0;
    this.fontSize = 16;
    this.life = 50;
  }

  update() {
    this.y -= 1;
    this.life--;
    this.alpha = this.life / 50;
  }

  draw(ctx, camera) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.font = `${this.fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(this.text, this.x - camera.x, this.y - camera.y);
    ctx.restore();
  }
}

class Goal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 70;
    this.reached = false;
  }

  draw(ctx, camera) {
    // Zielflagge
    ctx.fillStyle = '#8B4513'; // Brauner Pfosten
    ctx.fillRect(this.x - camera.x, this.y - camera.y, 8, this.height);
    
    // Flagge
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(this.x - camera.x + 8, this.y - camera.y, 24, 32);
    
    // Zielsymbol
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x - camera.x + 12, this.y - camera.y + 4, 16, 24);
    
    // M für Mario
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(this.x - camera.x + 16, this.y - camera.y + 8, 2, 16);
    ctx.fillRect(this.x - camera.x + 18, this.y - camera.y + 8, 2, 4);
    ctx.fillRect(this.x - camera.x + 20, this.y - camera.y + 12, 2, 4);
    ctx.fillRect(this.x - camera.x + 22, this.y - camera.y + 8, 2, 16);
  }
}

class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.state = 'menu'; // menu, playing, paused, gameOver, levelComplete
    this.currentLevel = 1;
    this.score = 0;
    this.coinCount = 0;
    this.enemiesDefeated = 0;
    this.camera = { x: 0, y: 0 };
    this.debug = false;
    
    this.player = null;
    this.platforms = [];
    this.blocks = [];
    this.pipes = [];
    this.enemies = [];
    this.coins = [];
    this.powerups = [];
    this.floatingTexts = [];
    this.goal = null;
    
    this.keys = {};
    this.lastTime = 0;
    
    this.setupEventListeners();
    this.gameLoop();
  }

  setupEventListeners() {
    // Tastaturereignisse
    document.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      
      // Feuerball schießen mit F
      if (e.code === 'KeyF' && this.state === 'playing') {
        this.player.shootFireball();
      }
      
      // Pausenmenü mit Escape
      if (e.code === 'Escape') {
        if (this.state === 'playing') {
          this.pauseGame();
        } else if (this.state === 'paused') {
          this.resumeGame();
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      
      // Sprung abbrechen wenn W/Space losgelassen wird
      if ((e.code === 'KeyW' || e.code === 'ArrowUp' || e.code === 'Space') && 
          this.player && this.player.velocityY < 0) {
        this.player.jumping = false;
      }
    });
  }

  startLevel(levelNumber) {
    this.currentLevel = levelNumber;
    this.state = 'playing';
    this.loadLevel(levelNumber);
    this.hideAllMenus();
    this.showGameUI();
    this.updateUI();
  }

  loadLevel(levelNumber) {
    const levelData = gameData.levels[levelNumber - 1];
    
    // Spieler erstellen
    this.player = new Player(50, 450);
    
    // Plattformen erstellen
    this.platforms = levelData.platforms.map(p => new Platform(p.x, p.y, p.width, p.height, p.type));
    
    // Blöcke erstellen
    this.blocks = levelData.blocks.map(b => new Block(b.x, b.y, b.type, b.content));
    
    // Rohre erstellen
    this.pipes = levelData.pipes.map(p => new Pipe(p.x, p.y, p.height));
    
    // Gegner erstellen
    this.enemies = levelData.enemies.map(e => new Enemy(e.x, e.y, e.type));
    
    // Münzen erstellen
    this.coins = levelData.coins.map(c => new Coin(c.x, c.y));
    
    // Ziel erstellen
    this.goal = new Goal(levelData.goal.x, levelData.goal.y);
    
    // Power-ups zurücksetzen
    this.powerups = [];
    
    // Schwebende Texte zurücksetzen
    this.floatingTexts = [];
    
    // Kamera zurücksetzen
    this.camera.x = 0;
    this.camera.y = 0;
    
    // Level-spezifische Hintergrundfarbe setzen
    document.querySelector('.game-container').style.backgroundColor = levelData.backgroundColor;
  }

  update(time) {
    if (this.state !== 'playing') return;
    
    // Delta-Zeit berechnen für gleichmäßige Bewegung
    const delta = time - this.lastTime;
    this.lastTime = time;
    
    // Eingabe verarbeiten
    this.handleInput();
    
    // Spieler aktualisieren
    this.player.update(this.platforms, this.blocks, delta);
    
    // Gegner aktualisieren
    this.enemies.forEach(enemy => enemy.update(this.platforms, this.blocks, this.player));
    
    // Münzen aktualisieren
    this.coins.forEach(coin => coin.update());
    
    // Blöcke aktualisieren
    this.blocks.forEach(block => block.update());
    
    // Power-ups aktualisieren
    this.powerups.forEach(powerup => powerup.update(this.platforms, this.blocks));
    
    // Schwebende Texte aktualisieren
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      this.floatingTexts[i].update();
      if (this.floatingTexts[i].life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
    
    // Kollisionen prüfen
    this.checkCollisions();
    
    // Kamera aktualisieren
    this.updateCamera();
    
    // Siegbedingung prüfen
    this.checkWinCondition();
    
    // Prüfen ob Spieler aus der Welt gefallen ist
    if (this.player.y > this.canvas.height + 200) {
      this.player.die();
    }
  }

  handleInput() {
    // WASD-Steuerung
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
      // Wird direkt im Player.update() verarbeitet
    }
    if (this.keys['KeyD'] || this.keys['ArrowRight']) {
      // Wird direkt im Player.update() verarbeitet
    }
    if (this.keys['KeyW'] || this.keys['ArrowUp'] || this.keys['Space']) {
      // Sprung nur auslösen wenn gerade gedrückt
      if (!this.player.jumping && (this.player.grounded || this.player.coyoteTimer > 0)) {
        this.player.jump();
      }
    }
  }

  checkCollisions() {
    // Spieler-Gegner Kollision
    for (let enemy of this.enemies) {
      if (!enemy.alive) continue;
      
      if (this.player.x < enemy.x + enemy.width &&
          this.player.x + this.player.width > enemy.x &&
          this.player.y < enemy.y + enemy.height &&
          this.player.y + this.player.height > enemy.y) {
        
        // Wenn Spieler fällt und über dem Gegner ist, Gegner besiegen
        if (this.player.velocityY > 0 && this.player.y + this.player.height < enemy.y + enemy.height / 2) {
          enemy.alive = false;
          this.score += 200;
          this.enemiesDefeated++;
          this.createFloatingText(enemy.x + enemy.width/2, enemy.y - 20, "+200", "#FFD700");
          this.player.velocityY = -6; // Kleiner Sprung
        } else if (!this.player.invincible && !this.player.starPower) {
          // Spieler nimmt Schaden
          this.player.takeDamage();
        } else if (this.player.starPower) {
          // Stern-Kraft besiegt Gegner bei Berührung
          enemy.alive = false;
          this.score += 400;
          this.enemiesDefeated++;
          this.createFloatingText(enemy.x + enemy.width/2, enemy.y - 20, "+400", "#FFD700");
        }
      }
    }
    
    // Spieler-Münze Kollision
    for (let coin of this.coins) {
      if (coin.collected) continue;
      
      if (this.player.x < coin.x + coin.width &&
          this.player.x + this.player.width > coin.x &&
          this.player.y < coin.y + coin.height &&
          this.player.y + this.player.height > coin.y) {
        
        coin.collected = true;
        this.score += gameData.gameSettings.coinValue;
        this.coinCount++;
        this.createFloatingText(coin.x + coin.width/2, coin.y - 20, `+${gameData.gameSettings.coinValue}`, "#FFD700");
      }
    }
    
    // Spieler-Power-up Kollision
    for (let i = this.powerups.length - 1; i >= 0; i--) {
      const powerup = this.powerups[i];
      if (powerup.collected) continue;
      
      if (this.player.x < powerup.x + powerup.width &&
          this.player.x + this.player.width > powerup.x &&
          this.player.y < powerup.y + powerup.height &&
          this.player.y + this.player.height > powerup.y) {
        
        powerup.collected = true;
        this.player.powerUp(powerup.type);
        this.score += 1000;
        this.createFloatingText(powerup.x + powerup.width/2, powerup.y - 20, "+1000", "#FFD700");
        this.powerups.splice(i, 1);
      }
    }
    
    // Feuerball-Gegner Kollision
    for (let fireball of this.player.fireballs) {
      for (let enemy of this.enemies) {
        if (!enemy.alive || fireball.toRemove) continue;
        
        if (fireball.x < enemy.x + enemy.width &&
            fireball.x + fireball.width > enemy.x &&
            fireball.y < enemy.y + enemy.height &&
            fireball.y + fireball.height > enemy.y) {
          
          enemy.alive = false;
          fireball.toRemove = true;
          this.score += 400;
          this.enemiesDefeated++;
          this.createFloatingText(enemy.x + enemy.width/2, enemy.y - 20, "+400", "#FFD700");
        }
      }
    }
    
    this.updateUI();
  }

  checkWinCondition() {
    if (this.player.x < this.goal.x + this.goal.width &&
        this.player.x + this.player.width > this.goal.x &&
        this.player.y < this.goal.y + this.goal.height &&
        this.player.y + this.player.height > this.goal.y) {
      
      this.levelComplete();
    }
  }

  updateCamera() {
    // Spieler mit etwas Vorausschau folgen
    const targetX = this.player.x - this.canvas.width / 3;
    
    // Sanfte Kameraführung
    this.camera.x += (targetX - this.camera.x) * 0.1;
    
    // Kamera in Grenzen halten
    if (this.camera.x < 0) this.camera.x = 0;
  }

  respawnPlayer() {
    // Spieler am Anfang des Levels neu starten
    this.player.x = 50;
    this.player.y = 450;
    this.player.velocityX = 0;
    this.player.velocityY = 0;
    this.player.state = "small";
    this.camera.x = 0;
    
    // Kurze Unverwundbarkeit nach Respawn
    this.player.invincible = true;
    this.player.invincibleTimer = 3000;
    
    this.updateUI();
  }

  createFloatingText(x, y, text, color) {
    this.floatingTexts.push(new FloatingText(x, y, text, color));
  }

  showPowerupText(text) {
    const powerupDisplay = document.getElementById('powerupDisplay');
    const powerupText = powerupDisplay.querySelector('.powerup-text');
    
    powerupText.textContent = text;
    powerupDisplay.classList.remove('hidden');
    
    // Nach 2 Sekunden ausblenden
    setTimeout(() => {
      powerupDisplay.classList.add('hidden');
    }, 2000);
  }

  gameOver() {
    this.state = 'gameOver';
    this.hideGameUI();
    document.getElementById('finalScore').textContent = this.score;
    document.getElementById('gameOverScreen').classList.remove('hidden');
  }

  levelComplete() {
    this.state = 'levelComplete';
    this.hideGameUI();
    document.getElementById('levelScore').textContent = this.score;
    document.getElementById('coinsCollected').textContent = this.coinCount;
    document.getElementById('enemiesDefeated').textContent = this.enemiesDefeated;
    document.getElementById('levelCompleteScreen').classList.remove('hidden');
  }

  nextLevel() {
    if (this.currentLevel < gameData.levels.length) {
      this.startLevel(this.currentLevel + 1);
    } else {
      this.showMainMenu();
    }
  }

  restartCurrentLevel() {
    this.startLevel(this.currentLevel);
    this.player.lives = gameData.gameSettings.playerLives;
    this.score = 0;
    this.coinCount = 0;
    this.enemiesDefeated = 0;
  }

  pauseGame() {
    if (this.state === 'playing') {
      this.state = 'paused';
      document.getElementById('pauseMenu').classList.remove('hidden');
    }
  }

  resumeGame() {
    if (this.state === 'paused') {
      this.state = 'playing';
      document.getElementById('pauseMenu').classList.add('hidden');
    }
  }

  showMainMenu() {
    this.state = 'menu';
    this.hideAllMenus();
    this.hideGameUI();
    document.getElementById('mainMenu').classList.remove('hidden');
    
    // Spielstatus zurücksetzen
    this.score = 0;
    this.coinCount = 0;
    this.enemiesDefeated = 0;
    this.currentLevel = 1;
  }

  quitGame() {
    if (confirm('Möchten Sie das Spiel wirklich beenden?')) {
      window.close();
    }
  }

  hideAllMenus() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('pauseMenu').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.add('hidden');
    document.getElementById('levelCompleteScreen').classList.add('hidden');
    document.getElementById('powerupDisplay').classList.add('hidden');
  }

  showGameUI() {
    document.getElementById('gameUI').classList.remove('hidden');
  }

  hideGameUI() {
    document.getElementById('gameUI').classList.add('hidden');
  }

  updateUI() {
    document.getElementById('scoreDisplay').textContent = this.score;
    document.getElementById('levelDisplay').textContent = this.currentLevel;
    document.getElementById('livesDisplay').textContent = this.player.lives;
    document.getElementById('marioStateDisplay').textContent = 
        this.player.state === "small" ? "Small" : 
        (this.player.state === "super" ? "Super" : "Fire");
  }

  draw() {
    // Canvas löschen
    this.ctx.fillStyle = gameData.levels[this.currentLevel - 1]?.backgroundColor || '#5DADE2';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (this.state !== 'playing' && this.state !== 'paused') return;
    
    // Plattformen zeichnen
    this.platforms.forEach(platform => platform.draw(this.ctx, this.camera));
    
    // Rohre zeichnen
    this.pipes.forEach(pipe => pipe.draw(this.ctx, this.camera));
    
    // Blöcke zeichnen
    this.blocks.forEach(block => block.draw(this.ctx, this.camera));
    
    // Münzen zeichnen
    this.coins.forEach(coin => coin.draw(this.ctx, this.camera));
    
    // Power-ups zeichnen
    this.powerups.forEach(powerup => powerup.draw(this.ctx, this.camera));
    
    // Gegner zeichnen
    this.enemies.forEach(enemy => enemy.draw(this.ctx, this.camera));
    
    // Spieler zeichnen
    if (this.player) {
      this.player.draw(this.ctx, this.camera);
    }
    
    // Ziel zeichnen
    if (this.goal) {
      this.goal.draw(this.ctx, this.camera);
    }
    
    // Schwebende Texte zeichnen
    this.floatingTexts.forEach(text => text.draw(this.ctx, this.camera));
  }

  gameLoop(time) {
    this.update(time);
    this.draw();
    requestAnimationFrame((time) => this.gameLoop(time));
  }
}

// Spiel initialisieren wenn Seite geladen ist
let game;
window.addEventListener('load', () => {
  game = new Game();
});