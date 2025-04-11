<template>
  <div class="admin-dashboard">
    <nav class="admin-nav">
      <div class="container">
        <div class="nav-content">
          <h1>Admin Dashboard</h1>
          <button class="btn-logout" @click="logout">Logout</button>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="dashboard-content">
        <div class="stats-cards">
          <div class="stat-card">
            <h3>Total Wishes</h3>
            <p class="number">{{ wishes.length }}</p>
          </div>
          <div class="stat-card">
            <h3>Today's Wishes</h3>
            <p class="number">{{ todayWishes.length }}</p>
          </div>
        </div>

        <div class="wishes-table">
          <div class="table-header">
            <h2>All Birthday Wishes</h2>
            <div class="search-box">
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Search wishes..."
                @input="filterWishes"
              >
            </div>
          </div>

          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="wish in filteredWishes" :key="wish._id">
                  <td>{{ wish.name }}</td>
                  <td>{{ wish.message }}</td>
                  <td>{{ formatDate(wish.createdAt) }}</td>
                  <td>
                    <button 
                      class="btn-delete" 
                      @click="deleteWish(wish._id)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api'

export default {
  name: 'AdminDashboard',
  data() {
    return {
      wishes: [],
      searchQuery: '',
      filteredWishes: []
    }
  },
  computed: {
    todayWishes() {
      const today = new Date().toISOString().split('T')[0];
      return this.wishes.filter(wish => 
        new Date(wish.createdAt).toISOString().split('T')[0] === today
      );
    }
  },
  methods: {
    async fetchWishes() {
      try {
        const response = await api.getAllWishes();
        if (response.success) {
          this.wishes = response.wishes;
          this.filteredWishes = this.wishes;
        }
      } catch (error) {
        console.error('Error fetching wishes:', error);
      }
    },
    filterWishes() {
      if (!this.searchQuery) {
        this.filteredWishes = this.wishes;
        return;
      }
      
      const query = this.searchQuery.toLowerCase();
      this.filteredWishes = this.wishes.filter(wish => 
        wish.name.toLowerCase().includes(query) || 
        wish.message.toLowerCase().includes(query)
      );
    },
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    async deleteWish(wishId) {
      if (!confirm('Are you sure you want to delete this wish?')) return;
      
      try {
        const response = await api.deleteWish(wishId);
        if (response.success) {
          this.wishes = this.wishes.filter(wish => wish._id !== wishId);
          this.filteredWishes = this.filteredWishes.filter(wish => wish._id !== wishId);
        }
      } catch (error) {
        console.error('Error deleting wish:', error);
      }
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchWishes();
  }
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
}

.admin-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.stat-card h3 {
  color: #4a90e2;
  margin-bottom: 1rem;
}

.stat-card .number {
  font-size: 2.5rem;
  font-weight: bold;
}

.wishes-table {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.search-box input {
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  width: 300px;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

th {
  color: #4a90e2;
  font-weight: 500;
}

.btn-logout {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-logout:hover {
  background: #ff5252;
}

.btn-delete {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-delete:hover {
  background: #ff6b6b;
  color: white;
}

@media (max-width: 768px) {
  .table-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .search-box input {
    width: 100%;
  }
}
</style> 