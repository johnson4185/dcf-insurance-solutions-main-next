"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, AlertCircle, ShoppingCart } from "lucide-react";
import { ScrollFadeIn } from "@/components/common/ScrollAnimations";
import { insuranceBuildModules, type BuildModule } from "@/data/build-modules.data";

interface ProductBuildModulesProps {
  colorScheme: string;
}

export default function ProductBuildModules({ }: ProductBuildModulesProps) {
  const [selectedModules, setSelectedModules] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Core", "Processing", "Digital", "Advanced"];
  
  const filteredModules = useMemo(() => {
    if (activeCategory === "All") return insuranceBuildModules;
    return insuranceBuildModules.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  const toggleModule = (moduleId: string) => {
    const newSelected = new Set(selectedModules);
    if (newSelected.has(moduleId)) {
      newSelected.delete(moduleId);
      // Remove dependent modules
      insuranceBuildModules.forEach(mod => {
        if (mod.dependencies?.includes(moduleId)) {
          newSelected.delete(mod.id);
        }
      });
    } else {
      newSelected.add(moduleId);
      // Auto-add dependencies
      const module = insuranceBuildModules.find(m => m.id === moduleId);
      module?.dependencies?.forEach(dep => newSelected.add(dep));
    }
    setSelectedModules(newSelected);
  };

  const isModuleAvailable = (module: BuildModule) => {
    if (!module.dependencies) return true;
    return module.dependencies.every(dep => selectedModules.has(dep));
  };

  const totalPrice = useMemo(() => {
    return Array.from(selectedModules).reduce((sum, id) => {
      const module = insuranceBuildModules.find(m => m.id === id);
      return sum + (module?.price || 0);
    }, 0);
  }, [selectedModules]);

  const selectedModulesList = useMemo(() => {
    return Array.from(selectedModules).map(id => 
      insuranceBuildModules.find(m => m.id === id)
    ).filter(Boolean) as BuildModule[];
  }, [selectedModules]);

  return (
    <>
      {/* Sticky Price Summary */}
      {selectedModules.size > 0 && (
        <div className="sticky top-16 z-30 bg-gray-900 text-white shadow-lg">
          <div className="container-wide mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-5 h-5" />
                <div>
                  <div className="font-semibold">{selectedModules.size} modules selected</div>
                  <div className="text-sm text-gray-400">Total: SAR {totalPrice.toLocaleString()}/month</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setSelectedModules(new Set())} className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  Clear All
                </button>
                <Link href="/purchase" className="inline-flex items-center gap-2 px-6 py-2 bg-orange-600 hover:bg-orange-700 font-semibold rounded-lg transition-colors">
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 bg-white" id="modules">
        <div className="container-wide mx-auto px-4 md:px-8">
          <ScrollFadeIn>
            <div className="max-w-3xl mb-12 text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Select your modules</h2>
              <p className="text-lg text-gray-600">Choose exactly what you need. Click on modules to add them to your custom solution.</p>
            </div>
          </ScrollFadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((module, index) => {
              const ModIcon = module.icon;
              const isSelected = selectedModules.has(module.id);
              const isAvailable = isModuleAvailable(module);
              const isDisabled = !isAvailable && !isSelected;

              return (
                <ScrollFadeIn key={module.id} delay={index * 0.05}>
                  <motion.div
                    whileHover={!isDisabled ? { y: -4 } : {}}
                    className={`relative bg-white rounded-xl p-6 border-2 transition-all ${
                      isSelected
                        ? "border-orange-500 shadow-lg bg-orange-50"
                        : isDisabled
                        ? "border-gray-200 opacity-50 cursor-not-allowed"
                        : "border-gray-200 hover:border-orange-300 hover:shadow-md cursor-pointer"
                    }`}
                    onClick={() => !isDisabled && toggleModule(module.id)}
                  >
                    {/* Popular Badge */}
                    {module.popular && (
                      <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Selection Indicator */}
                    <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected 
                        ? "bg-orange-600 border-orange-600" 
                        : "bg-white border-gray-300"
                    }`}>
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                        isSelected ? "bg-orange-600" : "bg-gray-100"
                      }`}>
                        <ModIcon className={`w-6 h-6 ${isSelected ? "text-white" : "text-gray-700"}`} />
                      </div>
                      
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{module.name}</h3>
                          <div className="text-xs font-medium text-orange-600 uppercase tracking-wide">{module.category}</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                      
                      <div className="text-2xl font-bold text-gray-900 mb-3">
                        SAR {module.price.toLocaleString()}<span className="text-sm font-normal text-gray-500">/mo</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4">
                      {module.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {module.features.length > 3 && (
                        <li className="text-xs text-gray-500 ml-5">+{module.features.length - 3} more features</li>
                      )}
                    </ul>

                    {/* Dependencies */}
                    {module.dependencies && module.dependencies.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="flex items-start gap-2 text-xs text-gray-600">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>
                            Requires:{" "}
                            {module.dependencies.map(dep => {
                              const depModule = insuranceBuildModules.find(m => m.id === dep);
                              return depModule?.name;
                            }).join(", ")}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Disabled Overlay */}
                    {isDisabled && (
                      <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
                        <div className="text-center px-4">
                          <X className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-600">Select required modules first</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </ScrollFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Modules Summary */}
      {selectedModules.size > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-wide mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your custom solution</h2>
              
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <div className="space-y-4 mb-6">
                  {selectedModulesList.map(module => {
                    const ModIcon = module.icon;
                    return (
                      <div key={module.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                            <ModIcon className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{module.name}</div>
                            <div className="text-sm text-gray-500">{module.category}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-bold text-gray-900">SAR {module.price.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">/month</div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleModule(module.id);
                            }}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 border-t-2 border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">SAR {totalPrice.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div>{selectedModules.size} modules</div>
                      <div className="text-green-600 font-medium">
                        {totalPrice < 15000 ? `Save ${Math.round((1 - totalPrice / 15000) * 100)}% vs Suite` : 'Custom enterprise solution'}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href="/purchase" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-md">
                      Purchase Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/contact" className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-900">
                      Talk to Sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="container-wide mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollFadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Not sure what you need?</h2>
              <p className="text-xl text-gray-600 mb-8">Our team can help you design the perfect solution for your business.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
