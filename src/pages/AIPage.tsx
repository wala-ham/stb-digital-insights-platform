
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell, PieChart, Pie } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const AIPage = () => {
  const [selectedCluster, setSelectedCluster] = useState('all');
  
  // Sample clustering data
  const clusterData = [
    { x: 25000, y: 45, cluster: 'Jeunes Professionnels', color: '#003366', size: 120 },
    { x: 45000, y: 35, cluster: 'Familles', color: '#0066CC', size: 200 },
    { x: 65000, y: 55, cluster: 'Cadres Supérieurs', color: '#DAA520', size: 150 },
    { x: 35000, y: 28, cluster: 'Étudiants', color: '#00CC66', size: 80 },
    { x: 85000, y: 48, cluster: 'Entreprises', color: '#CC0066', size: 90 }
  ];

  const anomalyData = [
    { time: '00:00', normal: 1200, anomalies: 2 },
    { time: '04:00', normal: 800, anomalies: 1 },
    { time: '08:00', normal: 2500, anomalies: 3 },
    { time: '12:00', normal: 3200, anomalies: 15 },
    { time: '16:00', normal: 2800, anomalies: 8 },
    { time: '20:00', normal: 1800, anomalies: 4 }
  ];

  const riskScores = [
    { category: 'Très Faible', value: 65, color: '#00CC66' },
    { category: 'Faible', value: 25, color: '#66CC00' },
    { category: 'Moyen', value: 8, color: '#DAA520' },
    { category: 'Élevé', value: 2, color: '#CC6600' }
  ];

  const recentAnomalies = [
    { id: 1, type: 'Transaction suspecte', amount: '15,000 DT', account: '****2847', risk: 'Élevé', time: '14:32' },
    { id: 2, type: 'Connexion inhabituelle', amount: '-', account: '****1923', risk: 'Moyen', time: '13:45' },
    { id: 3, type: 'Montant anormal', amount: '50,000 DT', account: '****5629', risk: 'Élevé', time: '12:18' },
    { id: 4, type: 'Géolocalisation', amount: '2,500 DT', account: '****7384', risk: 'Faible', time: '11:22' }
  ];

  const predictions = [
    { model: 'Churn Prediction', accuracy: 94.2, lastUpdate: '2024-06-04 09:30', status: 'Active' },
    { model: 'Credit Scoring', accuracy: 91.8, lastUpdate: '2024-06-04 08:15', status: 'Active' },
    { model: 'Fraud Detection', accuracy: 97.5, lastUpdate: '2024-06-04 10:00', status: 'Active' },
    { model: 'Recommendation Engine', accuracy: 89.3, lastUpdate: '2024-06-04 07:45', status: 'Training' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-stb-blue mb-4">Intelligence Artificielle & Machine Learning</h1>
          <p className="text-xl text-gray-600">Analyse avancée et insights prédictifs pour optimiser vos opérations bancaires</p>
        </div>

        {/* AI Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover-lift border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">Modèles Actifs</p>
                  <p className="text-3xl font-bold text-green-800">12</p>
                  <p className="text-sm text-green-600">Performance optimale</p>
                </div>
                <div className="text-4xl">🤖</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-700">Précision Moyenne</p>
                  <p className="text-3xl font-bold text-blue-800">93.2%</p>
                  <p className="text-sm text-blue-600">+2.1% ce mois</p>
                </div>
                <div className="text-4xl">🎯</div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-700">Anomalies Détectées</p>
                  <p className="text-3xl font-bold text-orange-800">47</p>
                  <p className="text-sm text-orange-600">Dernières 24h</p>
                </div>
                <div className="text-4xl">⚠️</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main AI Content */}
        <Tabs defaultValue="clustering" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="clustering">Clustering</TabsTrigger>
            <TabsTrigger value="anomalies">Détection d'Anomalies</TabsTrigger>
            <TabsTrigger value="prediction">Modèles Prédictifs</TabsTrigger>
            <TabsTrigger value="insights">Insights IA</TabsTrigger>
          </TabsList>

          {/* Clustering Tab */}
          <TabsContent value="clustering" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Segmentation Automatique des Clients</CardTitle>
                    <p className="text-sm text-gray-600">Analyse par revenus et âge avec clustering K-means</p>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <ScatterChart>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="x" 
                          type="number" 
                          domain={['dataMin', 'dataMax']}
                          name="Revenus (DT)"
                          label={{ value: 'Revenus Annuels (DT)', position: 'bottom' }}
                        />
                        <YAxis 
                          dataKey="y" 
                          type="number" 
                          domain={['dataMin', 'dataMax']}
                          name="Âge"
                          label={{ value: 'Âge', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip 
                          cursor={{ strokeDasharray: '3 3' }}
                          content={({ active, payload }) => {
                            if (active && payload && payload[0]) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white p-3 border rounded shadow">
                                  <p className="font-semibold">{data.cluster}</p>
                                  <p>Revenus: {data.x.toLocaleString()} DT</p>
                                  <p>Âge: {data.y} ans</p>
                                  <p>Taille: {data.size} clients</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Scatter data={clusterData} fill="#8884d8">
                          {clusterData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Scatter>
                      </ScatterChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Profils des Clusters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {clusterData.map((cluster, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center space-x-3 mb-2">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: cluster.color }}
                          ></div>
                          <h4 className="font-semibold">{cluster.cluster}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{cluster.size} clients</p>
                        <div className="text-xs space-y-1">
                          <p>Revenus moyen: {cluster.x.toLocaleString()} DT</p>
                          <p>Âge moyen: {cluster.y} ans</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Anomalies Tab */}
          <TabsContent value="anomalies" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Détection d'Anomalies en Temps Réel</CardTitle>
                  <p className="text-sm text-gray-600">Monitoring des transactions suspectes (dernières 24h)</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={anomalyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="normal" 
                        stroke="#003366" 
                        strokeWidth={2}
                        name="Transactions normales"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="anomalies" 
                        stroke="#CC0066" 
                        strokeWidth={3}
                        name="Anomalies détectées"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribution des Scores de Risque</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={riskScores}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {riskScores.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Alertes Récentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnomalies.map((anomaly) => (
                    <div key={anomaly.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge variant={anomaly.risk === 'Élevé' ? 'destructive' : anomaly.risk === 'Moyen' ? 'default' : 'secondary'}>
                            {anomaly.risk}
                          </Badge>
                          <span className="font-medium">{anomaly.type}</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-600">
                          Compte: {anomaly.account} • Montant: {anomaly.amount}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{anomaly.time}</p>
                        <Button size="sm" variant="outline" className="mt-1">
                          Investiguer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Prediction Tab */}
          <TabsContent value="prediction" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>État des Modèles Prédictifs</CardTitle>
                <p className="text-sm text-gray-600">Performance et statut en temps réel</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {predictions.map((model, index) => (
                    <div key={index} className="p-6 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{model.model}</h3>
                        <Badge variant={model.status === 'Active' ? 'default' : 'secondary'}>
                          {model.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Précision</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={model.accuracy} className="flex-1" />
                            <span className="text-sm font-medium">{model.accuracy}%</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Dernière mise à jour</p>
                          <p className="text-sm font-medium">{model.lastUpdate}</p>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            Configurer
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommandations IA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <h4 className="font-semibold text-blue-800">Optimisation des Produits</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Le segment "Jeunes Professionnels" montre un fort intérêt pour les produits d'épargne digitaux. 
                      Recommandation: Lancer une campagne ciblée avec 15% d'augmentation de conversion prévue.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <h4 className="font-semibold text-green-800">Réduction des Risques</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Les modèles prédictifs indiquent une réduction de 23% des fraudes grâce aux nouveaux algorithmes. 
                      Économies estimées: 2.3M DT annuels.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <h4 className="font-semibold text-yellow-800">Prévention Churn</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      147 clients à risque élevé de départ identifiés. Actions de rétention recommandées 
                      avec 67% de chance de succès.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métriques d'Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">ROI des Modèles IA</span>
                      <span className="text-lg font-bold text-green-600">342%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Réduction des Coûts</span>
                      <span className="text-lg font-bold text-blue-600">18.5M DT</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Augmentation Revenus</span>
                      <span className="text-lg font-bold text-purple-600">12.8%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Satisfaction Client</span>
                      <span className="text-lg font-bold text-stb-blue">96.2%</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default AIPage;
