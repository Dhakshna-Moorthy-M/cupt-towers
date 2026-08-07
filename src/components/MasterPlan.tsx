import { LayoutGrid as Layout } from 'lucide-react';

export default function MasterPlan() {
  return (
    <section id="master-plan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Master Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Project Layout</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtfully planned layout for optimal living
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[600px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Layout className="w-20 h-20 mx-auto mb-4 text-red-600" />
              <p className="text-lg font-semibold mb-2">Master Plan Layout</p>
              <p className="text-sm">Add your master plan image here</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">19</p>
              <p className="text-sm text-gray-700">Total Units</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">Stilt+5</p>
              <p className="text-sm text-gray-700">Floors</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">2 BHK</p>
              <p className="text-sm text-gray-700">Only</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">Prime</p>
              <p className="text-sm text-gray-700">Location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
