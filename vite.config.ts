import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(), // React HMR 및 최적화
    compression({ algorithm: 'gzip' }),
  ],
  resolve: {
    alias: {
      '@': '/src', // 편리한 경로 참조 설정
    },
  },
  build: {
    outDir: 'public', // 빌드 결과를 public 폴더에 생성
    target: 'esnext', // 최신 브라우저를 목표로 빌드
    cssCodeSplit: true, // CSS 코드 분리
    sourcemap: false, // 소스맵 비활성화 (프로덕션 빌드 최적화)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 외부 라이브러리 분리
            return 'vendor'
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/firestore', 'firebase/auth'], // Firebase 관련 종속성 사전 번들링
    exclude: ['@testing-library/react'], // 개발 중 불필요한 종속성 제외
  },
  server: {
    port: 3000, // 개발 서버 포트
    watch: {
      usePolling: true, // 파일 시스템 변경 감지 방식 설정 (MacOS 환경 호환성 개선)
    },
  },
})
