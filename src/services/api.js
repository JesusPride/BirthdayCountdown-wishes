const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

export const api = {
  // Admin Authentication
  async registerAdmin(adminData) {
    const admins = JSON.parse(localStorage.getItem('admins') || '[]');
    const adminExists = admins.some(admin => admin.email === adminData.email);
    
    if (adminExists) {
      throw new Error('Admin already exists');
    }
    
    admins.push({
      ...adminData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('admins', JSON.stringify(admins));
    return { success: true };
  },

  async loginAdmin(credentials) {
    const admins = JSON.parse(localStorage.getItem('admins') || '[]');
    const admin = admins.find(admin => 
      admin.email === credentials.email && 
      admin.password === credentials.password
    );
    
    if (!admin) {
      throw new Error('Invalid admin credentials');
    }
    
    const token = 'admin-token-' + Date.now();
    localStorage.setItem('adminToken', token);
    return { success: true, token };
  },

  // Birthday Configuration
  async getConfig(uniqueRoute) {
    const config = JSON.parse(localStorage.getItem(`config_${uniqueRoute}`) || '{}');
    return { success: true, config };
  },

  async updateConfig(uniqueRoute, config) {
    localStorage.setItem(`config_${uniqueRoute}`, JSON.stringify(config));
    return { success: true };
  },

  // Birthday Wishes
  async getWishes(uniqueRoute) {
    const wishes = JSON.parse(localStorage.getItem(`wishes_${uniqueRoute}`) || '[]');
    return { success: true, wishes };
  },

  async submitWish(uniqueRoute, wishData) {
    const wishes = JSON.parse(localStorage.getItem(`wishes_${uniqueRoute}`) || '[]');
    const newWish = {
      ...wishData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    wishes.push(newWish);
    localStorage.setItem(`wishes_${uniqueRoute}`, JSON.stringify(wishes));
    return { success: true };
  },

  async deleteWish(uniqueRoute, wishId) {
    const wishes = JSON.parse(localStorage.getItem(`wishes_${uniqueRoute}`) || '[]');
    const updatedWishes = wishes.filter(wish => wish.id !== wishId);
    localStorage.setItem(`wishes_${uniqueRoute}`, JSON.stringify(updatedWishes));
    return { success: true };
  },

  async updateWish(uniqueRoute, wishId, wishData) {
    const wishes = JSON.parse(localStorage.getItem(`wishes_${uniqueRoute}`) || '[]');
    const updatedWishes = wishes.map(wish => 
      wish.id === wishId ? { ...wish, ...wishData } : wish
    );
    localStorage.setItem(`wishes_${uniqueRoute}`, JSON.stringify(updatedWishes));
    return { success: true };
  },

  async login(credentials) {
    // Check if credentials match the hardcoded admin user
    if (credentials.email === 'admin@example.com' && credentials.password === 'admin123') {
      const token = 'dummy-token-' + Date.now();
      localStorage.setItem('token', token);
      return { success: true, token };
    }
    
    throw new Error('Invalid email or password');
  },

  async register(userData) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(user => user.email === userData.email);
    
    if (userExists) {
      throw new Error('Email already registered');
    }
    
    users.push({
      ...userData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
  }
}; 