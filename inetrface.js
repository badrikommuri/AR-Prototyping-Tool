import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Map, Clock, Activity, Save, Play, Plus, Settings } from 'lucide-react';

const ARPrototypingTool = () => {
  const [selectedContext, setSelectedContext] = useState({
    location: 'office',
    time: 'morning',
    activity: 'working'
  });

  const [arElements, setArElements] = useState([
    { id: 1, type: 'notification', position: { x: 100, y: 100 } },
    { id: 2, type: '3d-model', position: { x: 300, y: 200 } }
  ]);

  // Simulated AR element library
  const arElementLibrary = [
    { type: 'notification', name: 'Notification Widget' },
    { type: '3d-model', name: '3D Model' },
    { type: 'ui-panel', name: 'UI Panel' }
  ];

  const handleContextChange = (type, value) => {
    setSelectedContext(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const addNewElement = (type) => {
    const newElement = {
      id: arElements.length + 1,
      type,
      position: { x: 200, y: 200 }
    };
    setArElements([...arElements, newElement]);
  };

  return (
    <div className="flex h-screen bg-gray-100 p-4">
      {/* Left Sidebar - Context Controls */}
      <div className="w-64 bg-white rounded-lg shadow-lg mr-4">
        <Card>
          <CardHeader className="font-bold text-lg">Context Settings</CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Map className="w-4 h-4" />
                <span>Location</span>
              </div>
              <Select value={selectedContext.location} onValueChange={(value) => handleContextChange('location', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="outdoors">Outdoors</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Time</span>
              </div>
              <Select value={selectedContext.time} onValueChange={(value) => handleContextChange('time', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Activity</span>
              </div>
              <Select value={selectedContext.activity} onValueChange={(value) => handleContextChange('activity', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="working">Working</SelectItem>
                  <SelectItem value="meeting">In Meeting</SelectItem>
                  <SelectItem value="break">On Break</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content - AR Canvas */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between mb-4">
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              <Play className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button variant="outline" size="sm">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-[calc(100%-60px)] relative">
          {/* Placeholder for AR Canvas */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            AR Canvas - Drag and drop elements here
          </div>
          
          {/* AR Elements */}
          {arElements.map(element => (
            <div
              key={element.id}
              className="absolute p-2 bg-white rounded shadow cursor-move"
              style={{
                left: element.position.x,
                top: element.position.y
              }}
            >
              {element.type}
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Element Library */}
      <div className="w-64 bg-white rounded-lg shadow-lg ml-4">
        <Card>
          <CardHeader className="font-bold text-lg">AR Elements</CardHeader>
          <CardContent>
            <div className="space-y-2">
              {arElementLibrary.map((element, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => addNewElement(element.type)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {element.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ARPrototypingTool;