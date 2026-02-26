import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Search, 
  Filter, 
  ChevronRight, 
  Users, 
  Monitor, 
  MapPin,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { COURSES, Course } from './constants';

interface CourseCardProps {
  course: Course;
  key?: React.Key;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tighter ${
            course.level === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
            course.level === 'intermediate' ? 'bg-amber-100 text-amber-700' :
            'bg-rose-100 text-rose-700'
          }`}>
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <Clock size={12} />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-display font-bold text-slate-900 mb-2 line-clamp-1">
          {course.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-grow">
          {course.description}
        </p>
        
        <button className="w-full py-3 px-4 bg-slate-900 hover:bg-brand-600 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 group">
          View Course
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || course.level === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-slate-900">
                Edu<span className="text-brand-600">Blend</span> Project Ste
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Courses</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Methodology</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About Us</a>
              <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-brand-600 transition-all shadow-sm">
                Student Portal
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0ea5e9,transparent_50%)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-100 text-xs font-bold uppercase tracking-widest mb-6">
                  <Users size={14} className="text-brand-500" />
                  Hybrid Learning Excellence
                </span>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                  The Future of Learning is <span className="text-brand-400 italic">Blended</span>.
                </h1>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Combine the flexibility of online learning with the depth of in-person sessions. 
                  Practical courses designed for today's job market.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-brand-500/40">
                    Explore Courses
                    <ArrowRight size={20} />
                  </button>
                  <div className="flex items-center gap-6 px-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <img 
                          key={i}
                          src={`https://picsum.photos/seed/user${i}/100/100`} 
                          className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                          alt="Student"
                        />
                      ))}
                    </div>
                    <div className="text-sm">
                      <p className="text-white font-bold">+2,500 Students</p>
                      <p className="text-slate-500">Successfully trained</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* B-Learning Features */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm shadow-blue-200">
                  <Monitor size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">60% Online</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-balance">
                    Theoretical classes and practical exercises on our interactive platform, at your own pace.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm shadow-emerald-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">40% In-Person</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-balance">
                    Intensive workshops and direct mentoring at our training centers.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0 shadow-sm shadow-purple-200">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">DGERT Certification</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-balance">
                    Recognized training that enhances your CV in both national and international markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Available Courses</h2>
                <p className="text-slate-600 max-w-xl">
                  Choose the path that best suits your goals. All our courses include lifetime access to online materials.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search courses..."
                    className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all w-full sm:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                  {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                        activeFilter === filter 
                          ? 'bg-slate-900 text-white shadow-sm' 
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {filter === 'all' ? 'All' : filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              layout
              className="course-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-400 mb-4">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">No courses found</h3>
                <p className="text-slate-600">Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.2),transparent_70%)]"></div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                  Ready to transform your tech career?
                </h2>
                <p className="text-brand-100 text-lg mb-10 leading-relaxed">
                  Join thousands of professionals who have already accelerated their growth with our B-Learning methodology. Enrolment open for the next semester.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-white text-brand-600 rounded-2xl font-bold hover:bg-brand-50 transition-all shadow-xl">
                    Enrol Now
                  </button>
                  <button className="px-8 py-4 bg-brand-700 text-white rounded-2xl font-bold hover:bg-brand-800 transition-all border border-brand-500/30">
                    Talk to a Consultant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-white">
                  Edu<span className="text-brand-600">Blend</span> Project Ste
                </span>
              </div>
              <p className="max-w-sm mb-8 leading-relaxed">
                Leaders in hybrid tech training in Portugal. 
                We empower professionals for tomorrow's challenges through an innovative and practical methodology.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-brand-500 transition-colors">All Courses</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">B-Learning Methodology</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">For Business</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 CoderStudio + fab@CPL + Curso Programador/a de Informática</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}