<template>
  <InfoPage>
    <template slot="title">
      <span class="page-content">Documents</span>
    </template>
    <template slot="subtitle">
      <span class="page-content">Official Documentation from ECSU</span>
    </template>
    <p>
      The Constitution outlines the role and responsibilities of ECSU and the
      <a href="/exec">Exec</a>. It,
      along with the Appendices, Contingency Fund Guidelines and Open Meeting Standing Orders, is available for download
      in PDF format.
    </p>

    <p>
      <a href="minutes">Minutes of Exec and Open Meetings</a> are also available for download.
    </p>
    <table class="download-container">
      <thead>
        <tr>
          <th>File</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a
              href="/downloads/protected/official_documents/ecsu_ents_constitution.pdf"
            >Ents Constitution</a>
          </td>
          <td>90.06 KiB</td>
        </tr>
        <tr class="even">
          <td>
            <!--<a href="/downloads/protected/official_documents/constitution.pdf">Constitution</a>-->
            <!--Hack due to perms error; fix with SRCF-->
            <a href="/downloads2/Constitution.pdf">Constitution</a>
          </td>
          <td>362.81 KiB</td>
        </tr>
        <tr>
          <td>
            <a
              href="/downloads/protected/official_documents/constitution appendices.pdf"
            >Constitutional Appendices</a>
          </td>
          <td>316.17 KiB</td>
        </tr>
        <tr class="even">
          <td>
            <a
              href="/downloads/protected/official_documents/contingency fund guidelines.pdf"
            >Contingency Fund Guidelines</a>
          </td>
          <td>44.1 KiB</td>
        </tr>
        <tr>
          <td>
            <a
              href="/downloads/protected/official_documents/open meeting standing orders.pdf"
            >Open Meeting Standing Orders</a>
          </td>
          <td>52.55 KiB</td>
        </tr>
        <tr class="even">
          <td>
            <a
              href="/downloads/protected/official_documents/sexual harassment advice.pdf"
            >Sexual Harassment Advice</a>
          </td>
          <td>541.53 KiB</td>
        </tr>
      </tbody>
    </table>
    <h2>Freedom of Information Act</h2>

    <p>
      Although ECSU isn't obliged to provide a publication scheme under the provisions of the Freedom of Information
      Act, we see the Act as a guide for good practice. As a result, all our official documents, including minutes of Exec
      and Open Meetings, are available to download.
    </p>

    <ul class="link_block">
      <li>
        <a href="http://www.hmso.gov.uk/acts/acts2000/20000036.htm">Freedom of Information Act 2000</a>
      </li>
      <li>
        <a href="http://www.ico.gov.uk/">Information Commissioner</a>
      </li>
    </ul>
  </InfoPage>
</template>


<script>
import InfoPage from "@/components/InfoPage";
import ImageCard from "@/components/ImageCard";
export default {
  components: { InfoPage, ImageCard },
  head: {
    title: "Official documents"
  }
};
</script>

