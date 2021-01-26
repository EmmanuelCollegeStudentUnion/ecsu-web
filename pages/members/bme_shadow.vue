<template>
  <InfoPage>
    <template slot="title">
      <span class="page-content">BME (Virtual) Shadowing Scheme</span>
    </template>
    <template slot="media">
      <ImageCard :image="image"/>
    </template>
    <p>Led by Emmanuel’s Students' Union, the BME Shadowing Scheme is open to Year 11 students from our link 
        areas of Sheffield, Essex, Thurrock, and Southend-on-Sea, who identify as being part of an underrepresented 
        ethnic group. </p>
    <p>The programme will run from March 2021 through to July 2021, involving mentoring from current students, the 
        opportunity to ‘try out’ new courses through the ‘subject strands’ (via lectures &amp; supervisions), and get 
        insight into what it might be like to be a student at the University of Cambridge. The programme will run virtually, 
        over MS Teams/Zoom, but we hope to invite participants to Cambridge for the final celebration of the programme. The 
        Shadowing Scheme is open to any student who identifies as BME, but will prioritise</p>
    <ul>
        <li>those who identify as part of the the most under-represented ethnic groups at the University of Cambridge (Black, 
            Bangladeshi, Pakistani and Arab students)</li>
        <li>those in care or who are care leavers, those eligible for free school meals (or who have been eligible in the last 
            six years), those who live in areas with low levels of progression to HE as determined by home postcode, estranged 
            students, young carers, and those who would be the first generation of their family to progress to higher education</li>
        <li>those studying at non-selective &amp; non-fee-paying schools</li>
    </ul>

    <p>Participants will be required to use camera &amp; mic for mentoring &amp; supervisions, so parent/guardian permission 
        will be requested, following completion of the application form. All sessions will be supervised by a DBS'd member of 
        staff or student; there will be no 1-1 activities.</p>
    <p>Each month will have a theme:</p>
    <ul>
        <li>March-April: Welcome to Cambridge &amp; Subject Introduction (lectures &amp; group supervision focussed on subjects 
            not covered at school)</li>	
        <li>April-May: Student Life (socials with mentors)</li>	
        <li>May-June: Subject Support (lectures &amp; group supervision focussed on supporting school-based learning - e.g. 
            study skills &amp; GCSE to A Level transition)</li>	
        <li>July: Celebration (dates TBC; may be later in the year, COVID-dependent)</li>
    </ul>
    <p>If you would be unable to participate in this programme due to connectivity issues, lack of device access, 
        caring responsibilities, or something else beyond your control, please email slo@emma.cam.ac.uk.</p>
    <ul>
        <li>Apply <a href="https://cambridge.eu.qualtrics.com/jfe/form/SV_6JMirzKEMbY6rXf">here</a>. <strong>Deadline for applications INCLUDING PARENT/GUARDIAN CONSENT is Friday 19th Febuary 2021; we aim to inform successful applicants by 1 March 2021. </strong></li>
        <li><span>Email slo@emma.cam.ac.uk with any questions. </span></li>
    </ul>

  </InfoPage>
</template>



<script>
import ImageCard from "@/components/ImageCard";
import PostPage from "@/components/PostPage";
export default {
  components: {
    ImageCard,
    PostPage
  },
  head: {
    title: "BME (Virtual) Shadowing Scheme"
  },
  computed: {
    image() {
      return require("@/assets/images/site/emma_chapel.jpg");
    }
  }
};
</script>