
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Dashboard = () => {
  // Sample data for charts
  const clientData = [
    { month: 'Jan', particuliers: 45000, entreprises: 12000, total: 57000 },
    { month: 'Fév', particuliers: 47000, entreprises: 13500, total: 60500 },
    { month: 'Mar', particuliers: 49000, entreprises: 14000, total: 63000 },
    { month: 'Avr', particuliers: 51000, entreprises: 15200, total: 66200 },
    { month: 'Mai', particuliers: 53000, entreprises: 16000, total: 69000 },
    { month: 'Jun', particuliers: 55000, entreprises: 17500, total: 72500 }
  ];

  const performanceData = [
    { category: 'Dépôts', value: 2.8, target: 3.2 },
    { category: 'Crédits', value: 4.2, target: 4.0 },
    { category: 'Cartes', value: 15.5, target: 16.0 },
    { category: 'Services', value: 8.7, target: 9.0 }
  ];

  const segmentData = [
    { name: 'Premium', value: 25, color: '#003366' },
    { name: 'Gold', value: 35, color: '#0066CC' },
    { name: 'Standard', value: 40, color: '#DAA520' }
  ];

  const supplierData = [
    { name: 'TechCorp', cost: 450000, performance: 92, contracts: 15 },
    { name: 'DataSoft', cost: 320000, performance: 88, contracts: 12 },
    { name: 'SecureBank', cost: 680000, performance: 95, contracts: 8 },
    { name: 'CloudTech', cost: 290000, performance: 85, contracts: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-stb-blue mb-4">Dashboard Business Intelligence</h1>
          <p className="text-xl text-gray-600">Analyse en temps réel des performances et insights stratégiques</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Select defaultValue="2024">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Région" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les régions</SelectItem>
              <SelectItem value="tunis">Grand Tunis</SelectItem>
              <SelectItem value="sfax">Sfax</SelectItem>
              <SelectItem value="sousse">Sousse</SelectItem>
            </SelectContent>
          </Select>

          <Button className="gradient-stb text-white">
            Exporter Rapport
          </Button>
        </div>

        {/* KPIs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Clients Total</p>
                  <p className="text-3xl font-bold text-stb-blue">2.5M</p>
                  <p className="text-sm text-green-600">+5.2% ce mois</p>
                </div>
                <div className="text-4xl">👥</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Chiffre d'Affaires</p>
                  <p className="text-3xl font-bold text-stb-blue">845M DT</p>
                  <p className="text-sm text-green-600">+12.8% ce mois</p>
                </div>
                <div className="text-4xl">💰</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                  <p className="text-3xl font-bold text-stb-blue">96%</p>
                  <p className="text-sm text-green-600">+2.1% ce mois</p>
                </div>
                <div className="text-4xl">⭐</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Agences Actives</p>
                  <p className="text-3xl font-bold text-stb-blue">120</p>
                  <p className="text-sm text-blue-600">+3 nouvelles</p>
                </div>
                <div className="text-4xl">🏢</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="clients">Analyse Clients</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="suppliers">Fournisseurs</TabsTrigger>
          </TabsList>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Évolution du Portefeuille Client</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={clientData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="particuliers" stroke="#003366" strokeWidth={3} />
                      <Line type="monotone" dataKey="entreprises" stroke="#0066CC" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Segmentation Clientèle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={segmentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {segmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Indicateurs de Performance (KPIs)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#003366" name="Réalisé" />
                    <Bar dataKey="target" fill="#DAA520" name="Objectif" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analyse des Fournisseurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Fournisseur</th>
                        <th className="text-left p-4">Coût Annuel</th>
                        <th className="text-left p-4">Performance</th>
                        <th className="text-left p-4">Contrats</th>
                        <th className="text-left p-4">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierData.map((supplier) => (
                        <tr key={supplier.name} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-medium">{supplier.name}</td>
                          <td className="p-4">{supplier.cost.toLocaleString()} DT</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-stb-blue h-2 rounded-full"
                                  style={{ width: `${supplier.performance}%` }}
                                ></div>
                              </div>
                              <span className="text-sm">{supplier.performance}%</span>
                            </div>
                          </td>
                          <td className="p-4">{supplier.contracts}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              supplier.performance >= 90 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {supplier.performance >= 90 ? 'Excellent' : 'Bon'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Dashboard;
