export function contact_info() {
  document.getElementById('contact_info-container').style.display = 'flex';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'none';
}
export function personal() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'flex';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'none';
}
export function job_status() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'flex';
  document.getElementById('social_medias-container').style.display = 'none';
}
export function social_medias() {
  document.getElementById('contact_info-container').style.display = 'none';
  document.getElementById('personal-container').style.display = 'none';
  document.getElementById('job_status-container').style.display = 'none';
  document.getElementById('social_medias-container').style.display = 'flex';
}
