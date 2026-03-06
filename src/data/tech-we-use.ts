import giteaLogo from '@/assets/gitea-logo.png';
import grafanaLogo from '@/assets/grafana-logo.svg';
import harborLogo from '@/assets/harbor-logo.svg';
import k8sLogo from '@/assets/k8s-logo.png';
import kanisterLogo from '@/assets/kanister-logo.svg';
import keycloakLogo from '@/assets/keycloak-logo.svg';
import minioLogo from '@/assets/minio-logo.svg';
import nestLogo from '@/assets/nest-logo.svg';
import oauth2Logo from '@/assets/oauth2-logo.svg';
import postgresLogo from '@/assets/postgres-logo.svg';
import rabbitmqLogo from '@/assets/rabbitmq-logo.svg';
import reactLogo from '@/assets/react-logo.svg';
import tektonLogo from '@/assets/tekton-logo.png';

export const techWeUse = [
  {
    name: 'Kubernetes',
    icon: k8sLogo,
    classes: 'w-12 h-12 md:w-24 md:h-24 2xl:top-[20px] 2xl:left-[600px]',
    iconSize: 60,
  },
  {
    name: 'Tekton',
    icon: tektonLogo,
    classes: 'w-12 h-12 md:w-24 md:h-24 2xl:top-[180px] 2xl:left-[270px]',
    iconSize: 60,
  },
  {
    name: 'Gitea',
    icon: giteaLogo,
    classes: 'w-12 h-12 md:w-24 md:h-24 2xl:top-[420px] 2xl:left-[110px]',
    iconSize: 60,
  },
  {
    name: 'Grafana',
    icon: grafanaLogo,
    classes: 'w-12 h-12 md:w-24 md:h-24 2xl:top-[70px] 2xl:right-[420px]',
    iconSize: 60,
  },
  {
    name: 'Keycloak',
    icon: keycloakLogo,
    classes: 'w-12 h-12 md:w-24 md:h-24 2xl:top-[300px] 2xl:right-[170px]',
    iconSize: 60,
  },
  {
    name: 'Minio',
    icon: minioLogo,
    classes: 'w-12 h-12 md:w-20 md:h-20 2xl:top-[170px] 2xl:right-[680px]',
    iconSize: 25,
  },
  {
    name: 'Kanister',
    icon: kanisterLogo,
    classes: 'w-12 h-12 md:w-20 md:h-20 2xl:top-[240px] 2xl:left-[455px]',
    iconSize: 50,
  },
  {
    name: 'Harbor',
    icon: harborLogo,
    classes: 'w-12 h-12 md:w-20 md:h-20 2xl:top-[530px] 2xl:left-[240px]',
    iconSize: 50,
  },
  {
    name: 'PostgreSQL',
    icon: postgresLogo,
    classes: 'w-12 h-12 md:w-20 md:h-20 2xl:top-[280px] 2xl:right-[400px]',
    iconSize: 50,
  },
  {
    name: 'OAuth2',
    icon: oauth2Logo,
    classes: 'w-12 h-12 md:w-20 md:h-20 2xl:top-[500px] 2xl:right-[250px]',
    iconSize: 50,
  },
  {
    name: 'RabbitMQ',
    icon: rabbitmqLogo,
    classes: 'w-12 h-12 md:w-16 md:h-16 2xl:top-[450px] 2xl:left-[460px]',
    iconSize: 40,
  },
  {
    name: 'NestJS',
    icon: nestLogo,
    classes: 'w-12 h-12 md:w-16 md:h-16 2xl:top-[335px] 2xl:left-[650px]',
    iconSize: 40,
  },
  {
    name: 'ReactJS',
    icon: reactLogo,
    classes: 'w-12 h-12 md:w-16 md:h-16 2xl:top-[360px] 2xl:right-[580px]',
    iconSize: 40,
  },
];
